export default function SummaryCard({ chapter, onContinue }) {
  return (
    <div style={{
      minHeight: "100vh", background: "#020617",
      fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl",
      display: "flex", alignItems: "flex-start", justifyContent: "center"
    }}>
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 60%)"
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, width: "100%", padding: "32px 16px" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{chapter.emoji}</div>
          <div style={{ fontSize: 13, color: "#8b5cf6", fontWeight: 700, letterSpacing: 2, marginBottom: 4 }}>
            סיכום פרק {chapter.id}
          </div>
          <h2 style={{
            fontSize: 28, fontWeight: 900, margin: 0,
            background: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>{chapter.title}</h2>
        </div>

        {/* Lessons summary */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
          {chapter.lessons.map((lesson, i) => {
            // Extract first 2 bullet-like lines or first sentence
            const points = lesson.content
              .split("\n")
              .map(l => l.trim())
              .filter(l => l.length > 3 && !l.startsWith("•") === false || l.match(/^[•✅❌🔢📏💧🪶✅📝🐜📐⚔️📜☕💡]/u))
              .slice(0, 4);

            // Fallback: first line of content
            const summary = lesson.content.split("\n")[0];

            return (
              <div key={lesson.id} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(139,92,246,0.2)",
                borderRadius: 14, padding: "18px 20px"
              }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{
                    minWidth: 28, height: 28, borderRadius: "50%",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 900, flexShrink: 0, marginTop: 2
                  }}>{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#a78bfa", marginBottom: 8 }}>
                      {lesson.title}
                    </div>
                    {points.length > 0 ? (
                      <ul style={{ margin: 0, paddingRight: 18, color: "#94a3b8", fontSize: 13, lineHeight: 1.8 }}>
                        {points.map((p, j) => <li key={j}>{p.replace(/^[•✅❌]/u, "").trim()}</li>)}
                      </ul>
                    ) : (
                      <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.7 }}>
                        {summary.replace(/^[•✅❌]/u, "").trim()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun fact - last lesson's */}
        <div style={{
          background: "linear-gradient(135deg,rgba(251,191,36,0.08),rgba(245,158,11,0.04))",
          border: "1px solid rgba(251,191,36,0.25)",
          borderRadius: 14, padding: "16px 20px", marginBottom: 28
        }}>
          <div style={{ fontSize: 13, color: "#fbbf24", fontWeight: 700, marginBottom: 6 }}>⭐ זכור!</div>
          <div style={{ fontSize: 14, color: "#fcd34d", lineHeight: 1.6 }}>
            {chapter.lessons[chapter.lessons.length - 1].funFact}
          </div>
        </div>

        {/* CTA */}
        <button onClick={onContinue} style={{
          width: "100%",
          background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
          color: "#fff", border: "none", borderRadius: 16,
          padding: "18px", fontSize: 18, fontWeight: 700,
          cursor: "pointer", boxShadow: "0 8px 32px rgba(99,102,241,0.4)"
        }}>
          מוכן לחידון! 🎯
        </button>
      </div>
    </div>
  );
}
