import CodeBlock from "./CodeBlock.jsx";

export default function LessonView({ chapter, lessonIndex, onNext, onBackToMap }) {
  const lesson      = chapter.lessons[lessonIndex];
  const totalLessons = chapter.lessons.length;
  const isLast      = lessonIndex + 1 >= totalLessons;

  return (
    <div style={{
      minHeight: "100vh", background: "#020617",
      fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl"
    }}>
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 30% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)"
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "24px 16px" }}>

        {/* Nav */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24
        }}>
          <button onClick={onBackToMap} style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "#94a3b8", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 14
          }}>← מפה</button>
          <div style={{ display: "flex", gap: 6 }}>
            {chapter.lessons.map((_, i) => (
              <div key={i} style={{
                width: 32, height: 6, borderRadius: 3,
                background: i <= lessonIndex ? "#6366f1" : "rgba(255,255,255,0.1)",
                transition: "background 0.3s"
              }} />
            ))}
          </div>
          <div style={{ color: "#64748b", fontSize: 14 }}>{lessonIndex + 1}/{totalLessons}</div>
        </div>

        {/* Chapter badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <span style={{ fontSize: 32 }}>{chapter.emoji}</span>
          <div>
            <div style={{ fontSize: 13, color: "#6366f1", fontWeight: 700 }}>פרק {chapter.id}</div>
            <div style={{ fontSize: 22, fontWeight: 900 }}>{chapter.title}</div>
          </div>
        </div>

        {/* Lesson card */}
        <div style={{
          background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: 28,
          border: "1px solid rgba(255,255,255,0.08)", marginBottom: 20
        }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 20px", color: "#a78bfa" }}>
            📚 {lesson.title}
          </h2>
          <div style={{
            fontSize: 15, lineHeight: 1.85, color: "#cbd5e1",
            whiteSpace: "pre-wrap", marginBottom: 8
          }}>{lesson.content}</div>
        </div>

        {/* Code block – isolated LTR */}
        <div style={{ direction: "ltr", unicodeBidi: "isolate" }}>
          <CodeBlock code={lesson.code} />
        </div>

        {/* Fun fact */}
        <div style={{
          background: "linear-gradient(135deg,rgba(251,191,36,0.08),rgba(245,158,11,0.04))",
          border: "1px solid rgba(251,191,36,0.25)",
          borderRadius: 14, padding: "16px 20px", marginBottom: 24
        }}>
          <div style={{ fontSize: 13, color: "#fbbf24", fontWeight: 700, marginBottom: 6 }}>⚡ עובדה מגניבה</div>
          <div style={{ fontSize: 14, color: "#fcd34d", lineHeight: 1.6 }}>{lesson.funFact}</div>
        </div>

        {/* Next button */}
        <button onClick={onNext} style={{
          width: "100%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff", border: "none", borderRadius: 16,
          padding: "18px", fontSize: 18, fontWeight: 700,
          cursor: "pointer", boxShadow: "0 8px 32px rgba(99,102,241,0.4)"
        }}>
          {isLast ? "🎯 לחידון!" : "שיעור הבא ➜"}
        </button>
      </div>
    </div>
  );
}
