import { useState } from "react";

export default function QuizView({ quiz, onComplete, chapterXP }) {
  const [current,         setCurrent]         = useState(0);
  const [selected,        setSelected]        = useState(null);
  const [answered,        setAnswered]        = useState(false);
  const [score,           setScore]           = useState(0);
  const [finished,        setFinished]        = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  function handleSelect(idx) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    setShowExplanation(true);
    if (idx === quiz[current].answer) setScore(s => s + 1);
  }

  function handleNext() {
    if (current + 1 >= quiz.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
      setShowExplanation(false);
    }
  }

  // ── Results screen ──────────────────────────────────────────────────────
  if (finished) {
    const pct    = Math.round((score / quiz.length) * 100);
    const earned = Math.round(chapterXP * (pct / 100));
    const emoji  = pct === 100 ? "🏆" : pct >= 70 ? "⭐" : pct >= 50 ? "💪" : "📚";
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ fontSize: 72, marginBottom: 16 }}>{emoji}</div>
        <div style={{ fontSize: 32, fontWeight: 900, color: "#f0f9ff", marginBottom: 8 }}>
          {score}/{quiz.length} נכון!
        </div>
        <div style={{ fontSize: 48, fontWeight: 900, color: "#fbbf24", marginBottom: 24, textShadow: "0 0 30px #fbbf2488" }}>
          +{earned} XP
        </div>
        <div style={{ color: "#94a3b8", marginBottom: 32 }}>
          {pct === 100
            ? "מושלם! אתה Java אלוף! 🎯"
            : pct >= 70
              ? "כל הכבוד! כמעט מושלם 🌟"
              : "טוב! חזור על החומר ונסה שוב 💪"}
        </div>
        <button
          onClick={() => onComplete(earned)}
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff", border: "none", borderRadius: 16,
            padding: "16px 40px", fontSize: 18, fontWeight: 700,
            cursor: "pointer", boxShadow: "0 8px 32px rgba(99,102,241,0.5)"
          }}
        >
          המשך ➜
        </button>
      </div>
    );
  }

  // ── Question screen ─────────────────────────────────────────────────────
  const q = quiz[current];
  return (
    <div style={{ maxWidth: 620, margin: "0 auto" }}>
      {/* Progress */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, alignItems: "center" }}>
        <div style={{ color: "#94a3b8", fontSize: 14 }}>שאלה {current + 1} מתוך {quiz.length}</div>
        <div style={{ display: "flex", gap: 6 }}>
          {quiz.map((_, i) => (
            <div key={i} style={{
              width: 10, height: 10, borderRadius: "50%",
              background: i < current ? "#22c55e" : i === current ? "#6366f1" : "rgba(255,255,255,0.1)"
            }} />
          ))}
        </div>
      </div>

      {/* Question text */}
      <div style={{
        background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: 24,
        marginBottom: 20, border: "1px solid rgba(255,255,255,0.1)",
        fontSize: 17, color: "#f0f9ff", fontWeight: 600, lineHeight: 1.6
      }}>
        {q.q.split('\n').map((line, i) => {
          const isCode = /^[a-zA-Z\s\(\)\{\}\[\];=<>!+\-*/.,"'@0-9]+$/.test(line.trim()) && line.trim().length > 0;
          return (
            <div key={i} style={{
              direction: isCode ? "ltr" : "rtl",
              fontFamily: isCode ? "'JetBrains Mono','Fira Code','Courier New',monospace" : "inherit",
              fontSize: isCode ? 13 : 17,
              background: isCode ? "rgba(0,0,0,0.3)" : "transparent",
              borderRadius: isCode ? 6 : 0,
              padding: isCode ? "4px 10px" : "2px 0",
              marginTop: isCode ? 6 : 0,
              color: isCode ? "#93c5fd" : "#f0f9ff",
              whiteSpace: "pre"
            }}>{line}</div>
          );
        })}
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {q.options.map((opt, idx) => {
          let bg     = "rgba(255,255,255,0.04)";
          let border = "1px solid rgba(255,255,255,0.1)";
          let color  = "#e2e8f0";
          if (answered) {
            if (idx === q.answer)                              { bg = "rgba(34,197,94,0.15)";  border = "1px solid #22c55e"; color = "#86efac"; }
            else if (idx === selected && idx !== q.answer)    { bg = "rgba(239,68,68,0.15)";  border = "1px solid #ef4444"; color = "#fca5a5"; }
          }
          return (
            <button key={idx} onClick={() => handleSelect(idx)} style={{
              background: bg, border, color, borderRadius: 12,
              padding: "14px 20px", fontSize: 15, cursor: answered ? "default" : "pointer",
              textAlign: "right", transition: "all 0.2s", fontFamily: "inherit",
              display: "flex", alignItems: "center", gap: 12
            }}>
              <span style={{
                minWidth: 28, height: 28, borderRadius: "50%",
                background:
                  answered && idx === q.answer              ? "#22c55e" :
                  answered && idx === selected              ? "#ef4444" :
                  "rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, flexShrink: 0
              }}>
                {answered && idx === q.answer             ? "✓" :
                 answered && idx === selected             ? "✗" :
                 String.fromCharCode(65 + idx)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div style={{
          marginTop: 16, padding: 16, borderRadius: 12,
          background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)",
          color: "#c7d2fe", fontSize: 14, lineHeight: 1.6
        }}>
          💡 <strong>הסבר:</strong> {q.explanation}
        </div>
      )}

      {/* Next button */}
      {answered && (
        <button onClick={handleNext} style={{
          marginTop: 20, width: "100%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff", border: "none", borderRadius: 12,
          padding: "14px", fontSize: 16, fontWeight: 700, cursor: "pointer"
        }}>
          {current + 1 >= quiz.length ? "סיים את החידון! 🎉" : "שאלה הבאה ➜"}
        </button>
      )}
    </div>
  );
}
