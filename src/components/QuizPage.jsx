import QuizView from "./QuizView.jsx";

export default function QuizPage({ chapter, onComplete, onBackToMap, courseName = "Java" }) {
  return (
    <div style={{
      minHeight: "100vh", background: "#020617",
      fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl"
    }}>
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 70% 0%, rgba(139,92,246,0.12) 0%, transparent 60%)"
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", padding: "24px 16px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <button onClick={onBackToMap} style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "#94a3b8", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 14
          }}>← מפה</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>🎯</div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>חידון: {chapter.title}</div>
          </div>
          <div style={{ fontSize: 13, color: "#fbbf24" }}>עד {chapter.xpReward} XP</div>
        </div>

        <QuizView
          quiz={chapter.quiz}
          onComplete={onComplete}
          chapterXP={chapter.xpReward}
          onBackToMap={onBackToMap}
          courseName={courseName}
        />
      </div>
    </div>
  );
}
