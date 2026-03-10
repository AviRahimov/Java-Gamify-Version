import { useState, useEffect } from "react";
import ChapterMap       from "./components/ChapterMap.jsx";
import LessonView       from "./components/LessonView.jsx";
import MemeView         from "./components/MemeView.jsx";
import QuizPage         from "./components/QuizPage.jsx";
import SummaryCard      from "./components/SummaryCard.jsx";
import Glossary         from "./components/Glossary.jsx";
import Dashboard        from "./components/Dashboard.jsx";
import AchievementsView from "./components/AchievementsView.jsx";
import FlashcardsView   from "./components/FlashcardsView.jsx";
import DailyChallenge   from "./components/DailyChallenge.jsx";
import { CHAPTERS }     from "./data/chapters.js";
import { getEarnedAchievements } from "./data/achievements.js";

// ── helpers ────────────────────────────────────────────────────────────────
function loadJSON(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}
function loadStreak() {
  try {
    const raw = localStorage.getItem("jq_streak");
    if (!raw) return 0;
    const { count, lastDate } = JSON.parse(raw);
    const today     = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastDate === today || lastDate === yesterday) return count;
    return 0;
  } catch { return 0; }
}

export default function App() {
  const [xp,                setXP]                = useState(() => loadJSON("jq_xp", 0));
  const [completedChapters, setCompletedChapters] = useState(() => loadJSON("jq_completed", {}));
  const [quizScores,        setQuizScores]        = useState(() => loadJSON("jq_scores", {}));
  const [fastQuiz,          setFastQuiz]          = useState(() => loadJSON("jq_fast", false));
  const [streak,            setStreak]            = useState(loadStreak);
  const [selectedChapter,   setSelectedChapter]   = useState(null);
  const [view,              setView]              = useState("map"); // map|lesson|summary|meme|quiz|glossary|dashboard|achievements|flashcards|daily
  const [currentLesson,     setCurrentLesson]     = useState(0);
  const [showXPGain,        setShowXPGain]        = useState(null);
  const [newAchievements,   setNewAchievements]   = useState([]);
  const [dailyDoneToday,    setDailyDoneToday]    = useState(() => {
    const saved = localStorage.getItem("jq_daily");
    return saved === new Date().toDateString();
  });

  // ── persist ──────────────────────────────────────────────────────────────
  useEffect(() => { localStorage.setItem("jq_xp",       JSON.stringify(xp));               }, [xp]);
  useEffect(() => { localStorage.setItem("jq_completed", JSON.stringify(completedChapters)); }, [completedChapters]);
  useEffect(() => { localStorage.setItem("jq_scores",   JSON.stringify(quizScores));        }, [quizScores]);
  useEffect(() => { localStorage.setItem("jq_fast",     JSON.stringify(fastQuiz));          }, [fastQuiz]);

  // ── achievement checker ───────────────────────────────────────────────────
  function checkNewAchievements(newStats) {
    const prevEarned = getEarnedAchievements({
      xp, completedChapters, quizScores, streak, fastQuiz,
      totalChapters: CHAPTERS.length
    }).map(a => a.id);
    const nowEarned = getEarnedAchievements({
      ...newStats, totalChapters: CHAPTERS.length
    }).map(a => a.id);
    const fresh = nowEarned.filter(id => !prevEarned.includes(id));
    if (fresh.length > 0) setNewAchievements(fresh);
  }

  function addXP(amount) {
    setShowXPGain(amount);
    setTimeout(() => setShowXPGain(null), 2500);
    setXP(prev => prev + amount);
  }

  function startChapter(ch) {
    setSelectedChapter(ch);
    setCurrentLesson(0);
    setView("lesson");
  }

  function nextLesson() {
    if (currentLesson + 1 < selectedChapter.lessons.length) {
      setCurrentLesson(l => l + 1);
    } else {
      setView("summary");
    }
  }

  function completeQuiz(earned, score, total, isFast) {
    addXP(earned);
    const pct = Math.round((score / total) * 100);
    const newScores     = { ...quizScores,        [selectedChapter.id]: pct };
    const newCompleted  = { ...completedChapters, [selectedChapter.id]: true };
    const newFast       = fastQuiz || isFast;

    // Update streak
    const today     = new Date().toDateString();
    const savedStreak = localStorage.getItem("jq_streak");
    let newCount = 1;
    try {
      if (savedStreak) {
        const { count, lastDate } = JSON.parse(savedStreak);
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (lastDate === today)     newCount = count;
        else if (lastDate === yesterday) newCount = count + 1;
      }
    } catch { /* ignore */ }
    localStorage.setItem("jq_streak", JSON.stringify({ count: newCount, lastDate: today }));
    setStreak(newCount);

    checkNewAchievements({
      xp: xp + earned, completedChapters: newCompleted,
      quizScores: newScores, streak: newCount, fastQuiz: newFast
    });

    setQuizScores(newScores);
    setFastQuiz(newFast);
    setCompletedChapters(newCompleted);
    setSelectedChapter(null);
    setView("map");
  }

  function backToMap() {
    setView("map");
    setSelectedChapter(null);
  }

  function completeDailyChallenge(earned, correct) {
    if (correct && earned > 0) addXP(earned);
    const today = new Date().toDateString();
    localStorage.setItem("jq_daily", today);
    setDailyDoneToday(true);
    setView("map");
  }

  const earnedAchievements = getEarnedAchievements({
    xp, completedChapters, quizScores, streak, fastQuiz, totalChapters: CHAPTERS.length
  });

  return (
    <>
      {/* XP Toast */}
      {showXPGain && (
        <div style={{
          position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)",
          background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
          color: "#000", borderRadius: 99, padding: "12px 28px",
          fontSize: 20, fontWeight: 900, zIndex: 1000,
          boxShadow: "0 8px 40px rgba(251,191,36,0.6)",
          animation: "floatUp 2.5s ease-out forwards"
        }}>⭐ +{showXPGain} XP!</div>
      )}

      {/* New achievement toast */}
      {newAchievements.length > 0 && (
        <div style={{
          position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)",
          background: "linear-gradient(135deg, #1e293b, #0f172a)",
          border: "1px solid rgba(251,191,36,0.5)",
          color: "#fbbf24", borderRadius: 14, padding: "14px 24px",
          fontSize: 15, fontWeight: 700, zIndex: 1001,
          boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
          animation: "floatUp 3.5s ease-out forwards",
          whiteSpace: "nowrap"
        }}>
          🏆 הישג חדש: {newAchievements.length} הישג{newAchievements.length > 1 ? "ים" : ""} בוטלח!
        </div>
      )}

      <style>{`
        @keyframes floatUp {
          0%   { opacity:0; transform:translateX(-50%) translateY(20px);  }
          20%  { opacity:1; transform:translateX(-50%) translateY(0);      }
          80%  { opacity:1; transform:translateX(-50%) translateY(-10px);  }
          100% { opacity:0; transform:translateX(-50%) translateY(-30px);  }
        }
      `}</style>

      {view === "map" && (
        <ChapterMap
          xp={xp}
          completedChapters={completedChapters}
          streak={streak}
          earnedAchievements={earnedAchievements}
          dailyDoneToday={dailyDoneToday}
          onStartChapter={startChapter}
          onOpenGlossary={() => setView("glossary")}
          onOpenDashboard={() => setView("dashboard")}
          onOpenAchievements={() => setView("achievements")}
          onOpenFlashcards={() => setView("flashcards")}
          onOpenDaily={() => setView("daily")}
        />
      )}

      {view === "lesson" && selectedChapter && (
        <LessonView
          chapter={selectedChapter}
          lessonIndex={currentLesson}
          onNext={nextLesson}
          onBackToMap={backToMap}
        />
      )}

      {view === "summary" && selectedChapter && (
        <SummaryCard
          chapter={selectedChapter}
          onContinue={() => setView("meme")}
        />
      )}

      {view === "meme" && selectedChapter && (
        <MemeView
          chapter={selectedChapter}
          onContinue={() => setView("quiz")}
        />
      )}

      {view === "quiz" && selectedChapter && (
        <QuizPage
          chapter={selectedChapter}
          onComplete={completeQuiz}
          onBackToMap={backToMap}
        />
      )}

      {view === "glossary" && (
        <Glossary onClose={backToMap} />
      )}

      {view === "dashboard" && (
        <Dashboard
          xp={xp}
          completedChapters={completedChapters}
          quizScores={quizScores}
          streak={streak}
          onClose={backToMap}
        />
      )}

      {view === "achievements" && (
        <AchievementsView
          earnedIds={earnedAchievements.map(a => a.id)}
          onClose={backToMap}
        />
      )}

      {view === "flashcards" && (
        <FlashcardsView
          completedChapters={completedChapters}
          onClose={backToMap}
        />
      )}

      {view === "daily" && (
        <DailyChallenge
          alreadyDoneToday={dailyDoneToday}
          onComplete={completeDailyChallenge}
          onClose={backToMap}
        />
      )}
    </>
  );
}
