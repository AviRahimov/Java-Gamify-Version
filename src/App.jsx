import { useState } from "react";
import ChapterMap from "./components/ChapterMap.jsx";
import LessonView from "./components/LessonView.jsx";
import MemeView   from "./components/MemeView.jsx";
import QuizPage   from "./components/QuizPage.jsx";

export default function App() {
  const [xp,                 setXP]                 = useState(0);
  const [completedChapters,  setCompletedChapters]  = useState({});
  const [selectedChapter,    setSelectedChapter]    = useState(null);
  const [view,               setView]               = useState("map"); // map|lesson|meme|quiz
  const [currentLesson,      setCurrentLesson]      = useState(0);
  const [showXPGain,         setShowXPGain]         = useState(null);
  const [streak]                                    = useState(3);

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
      setView("meme");
    }
  }

  function completeQuiz(earned) {
    addXP(earned);
    setCompletedChapters(prev => ({ ...prev, [selectedChapter.id]: true }));
    setSelectedChapter(null);
    setView("map");
  }

  function backToMap() {
    setView("map");
    setSelectedChapter(null);
  }

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
          onStartChapter={startChapter}
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
    </>
  );
}
