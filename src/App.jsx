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

// Data
import { getEarnedAchievements } from "./data/achievements.js";
import { CHAPTERS as JAVA_CHAPTERS } from "./data/java/chapters.js";
import { FLASHCARDS as JAVA_FLASHCARDS } from "./data/java/flashcards.js";
import { CHALLENGES as JAVA_CHALLENGES } from "./data/java/challenges.js";
import { CHAPTERS as PYTHON_CHAPTERS } from "./data/python/chapters.js";
import { FLASHCARDS as PYTHON_FLASHCARDS } from "./data/python/flashcards.js";
import { CHALLENGES as PYTHON_CHALLENGES } from "./data/python/challenges.js";

// ── helpers ────────────────────────────────────────────────────────────────
function loadJSON(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}
function loadStreak(course) {
  try {
    const raw = localStorage.getItem(`jq_${course}_streak`);
    if (!raw) return 0;
    const { count, lastDate } = JSON.parse(raw);
    const today     = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastDate === today || lastDate === yesterday) return count;
    return 0;
  } catch { return 0; }
}

export default function App() {
  const [course, setCourse] = useState(() => loadJSON("jq_selected_course", "java"));

  const [xp,                setXP]                = useState(() => loadJSON(`jq_${course}_xp`, 0));
  const [completedChapters, setCompletedChapters] = useState(() => loadJSON(`jq_${course}_completed`, {}));
  const [quizScores,        setQuizScores]        = useState(() => loadJSON(`jq_${course}_scores`, {}));
  const [fastQuiz,          setFastQuiz]          = useState(() => loadJSON(`jq_${course}_fast`, false));
  const [streak,            setStreak]            = useState(() => loadStreak(course));
  
  const [selectedChapter,   setSelectedChapter]   = useState(null);
  const [view,              setView]              = useState("map"); // map|lesson|summary|meme|quiz|glossary|dashboard|achievements|flashcards|daily|courseSelect
  const [currentLesson,     setCurrentLesson]     = useState(0);
  const [showXPGain,        setShowXPGain]        = useState(null);
  const [newAchievements,   setNewAchievements]   = useState([]);
  const [dailyDoneToday,    setDailyDoneToday]    = useState(() => {
    const saved = localStorage.getItem(`jq_${course}_daily`);
    return saved === new Date().toDateString();
  });

  const CHAPTERS = course === "java" ? JAVA_CHAPTERS : PYTHON_CHAPTERS;
  const FLASHCARDS = course === "java" ? JAVA_FLASHCARDS : PYTHON_FLASHCARDS;
  const CHALLENGES = course === "java" ? JAVA_CHALLENGES : PYTHON_CHALLENGES;

  // Change course
  const switchCourse = (newCourse) => {
    setCourse(newCourse);
    localStorage.setItem("jq_selected_course", JSON.stringify(newCourse));
    // Reset states for new course
    setXP(loadJSON(`jq_${newCourse}_xp`, 0));
    setCompletedChapters(loadJSON(`jq_${newCourse}_completed`, {}));
    setQuizScores(loadJSON(`jq_${newCourse}_scores`, {}));
    setFastQuiz(loadJSON(`jq_${newCourse}_fast`, false));
    setStreak(loadStreak(newCourse));
    setDailyDoneToday(() => {
      const saved = localStorage.getItem(`jq_${newCourse}_daily`);
      return saved === new Date().toDateString();
    });
    setSelectedChapter(null);
    setView("map");
  };

  // ── persist ──────────────────────────────────────────────────────────────
  useEffect(() => { localStorage.setItem(`jq_${course}_xp`,       JSON.stringify(xp));               }, [xp, course]);
  useEffect(() => { localStorage.setItem(`jq_${course}_completed`, JSON.stringify(completedChapters)); }, [completedChapters, course]);
  useEffect(() => { localStorage.setItem(`jq_${course}_scores`,   JSON.stringify(quizScores));        }, [quizScores, course]);
  useEffect(() => { localStorage.setItem(`jq_${course}_fast`,     JSON.stringify(fastQuiz));          }, [fastQuiz, course]);

  // Update Dynamic Document Title
  useEffect(() => {
    document.title = course === "java" ? "Java Quest" : "Python Quest";
  }, [course]);

  // ── achievement checker ───────────────────────────────────────────────────
  function checkNewAchievements(newStats) {
    const prevEarned = getEarnedAchievements({
      xp, completedChapters, quizScores, streak, fastQuiz, course,
      totalChapters: CHAPTERS.length
    }).map(a => a.id);
    const nowEarned = getEarnedAchievements({
      ...newStats, course, totalChapters: CHAPTERS.length
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
    const savedStreak = localStorage.getItem(`jq_${course}_streak`);
    let newCount = 1;
    try {
      if (savedStreak) {
        const { count, lastDate } = JSON.parse(savedStreak);
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (lastDate === today)     newCount = count;
        else if (lastDate === yesterday) newCount = count + 1;
      }
    } catch { /* ignore */ }
    localStorage.setItem(`jq_${course}_streak`, JSON.stringify({ count: newCount, lastDate: today }));
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
    localStorage.setItem(`jq_${course}_daily`, today);
    setDailyDoneToday(true);
    setView("map");
  }

  const earnedAchievements = getEarnedAchievements({
    xp, completedChapters, quizScores, streak, fastQuiz, course, totalChapters: CHAPTERS.length
  });

  return (
    <>
      {/* Course Selection Modal */}
      {view === "courseSelect" && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(15,23,42,0.9)", zIndex: 2000,
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <div style={{
            background: "#1e293b", padding: "2rem", borderRadius: "1rem",
            textAlign: "center", border: "2px solid #3b82f6", minWidth: 300
          }}>
            <h2 style={{ fontSize: "1.5rem", color: "#f8fafc", marginBottom: "1.5rem" }}>
              בחר מסלול למידה
            </h2>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <button 
                onClick={() => switchCourse("java")}
                style={{
                  background: course === "java" ? "#3b82f6" : "#334155", color: "#fff",
                  padding: "1rem 2rem", borderRadius: "0.5rem", border: "none",
                  cursor: "pointer", fontSize: "1.2rem", fontWeight: "bold"
               }}>
                ☕ Java
              </button>
              <button 
                onClick={() => switchCourse("python")}
                style={{
                  background: course === "python" ? "#3b82f6" : "#334155", color: "#fff",
                  padding: "1rem 2rem", borderRadius: "0.5rem", border: "none",
                  cursor: "pointer", fontSize: "1.2rem", fontWeight: "bold"
                }}>
                🐍 Python
              </button>
            </div>
            {course && (
            <button 
              onClick={() => setView("map")}
              style={{
                marginTop: "2rem", background: "transparent", color: "#94a3b8",
                border: "none", cursor: "pointer", fontSize: "1rem"
              }}>
              ביטול
            </button>
            )}
          </div>
        </div>
      )}

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
        
        .change-course-btn {
          position: fixed;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #ef4444, #f97316);
          border: 2px solid #fbbf24;
          color: #fff;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          cursor: pointer;
          font-weight: 800;
          font-size: 1rem;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .change-course-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6);
        }
      `}</style>
      
      {view !== "courseSelect" && (
        <button 
          className="change-course-btn" 
          onClick={() => setView("courseSelect")}>
          {course === "java" ? "☕ Java" : "🐍 Python"} - שנה מסלול
        </button>
      )}

      {view === "map" && (
        <ChapterMap
          course={course}
          xp={xp}
          chapters={CHAPTERS}
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
          language={course}
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
          courseName={course === "java" ? "Java" : "Python"}
        />
      )}

      {view === "glossary" && (
        <Glossary onClose={backToMap} language={course} />
      )}

      {view === "dashboard" && (
        <Dashboard
          xp={xp}
          completedChapters={completedChapters}
          quizScores={quizScores}
          streak={streak}
          courseName={course === "java" ? "Java" : "Python"} chapters={CHAPTERS}
          onClose={backToMap}
        />
      )}

      {view === "achievements" && (
        <AchievementsView
          earnedIds={earnedAchievements.map(a => a.id)}
          courseName={course === "java" ? "Java" : "Python"}
          course={course}
          onClose={backToMap}
        />
      )}

      {view === "flashcards" && (
        <FlashcardsView
          flashcardsData={FLASHCARDS} chapters={CHAPTERS}
          completedChapters={completedChapters}
          courseName={course === "java" ? "Java" : "Python"}
          onClose={backToMap}
        />
      )}

      {view === "daily" && (
        <DailyChallenge
          challengesData={CHALLENGES}
          alreadyDoneToday={dailyDoneToday}
          onComplete={completeDailyChallenge}
          onClose={backToMap}
        />
      )}
    </>
  );
}
