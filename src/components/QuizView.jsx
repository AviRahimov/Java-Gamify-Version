import { useState, useRef } from "react";

function normalizeQuiz(rawQuiz) {
  if (!Array.isArray(rawQuiz)) return [];

  return rawQuiz
    .filter(Boolean)
    .map((item, index) => {
      const options = Array.isArray(item.options) && item.options.length > 0
        ? item.options
        : ["אין תשובות זמינות לשאלה הזאת"];
      const rawAnswer = Number(item.answer ?? item.correct ?? item.correctAnswer ?? 0);
      const answer = Number.isInteger(rawAnswer)
        ? Math.max(0, Math.min(rawAnswer, options.length - 1))
        : 0;

      return {
        ...item,
        q: item.q ?? item.question ?? `שאלה ${index + 1}`,
        options,
        answer,
        explanation: item.explanation ?? "אין הסבר זמין כרגע."
      };
    });
}

export default function QuizView({ quiz, onComplete, chapterXP, onBackToMap, courseName = "Java" }) {
  const safeQuiz = normalizeQuiz(quiz);
  const [current,         setCurrent]         = useState(0);
  const [selected,        setSelected]        = useState(null);
  const [answered,        setAnswered]        = useState(false);
  const [score,           setScore]           = useState(0);
  const [finished,        setFinished]        = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [hintsShown,      setHintsShown]      = useState(0);
  const startTimeRef = useRef(Date.now());

  if (safeQuiz.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "30px 16px" }}>
        <div style={{ fontSize: 52, marginBottom: 8 }}>⚠️</div>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>החידון לא זמין כרגע</div>
        <div style={{ color: "#94a3b8", marginBottom: 18 }}>נראה שחסרים נתוני שאלות לפרק הזה.</div>
        {onBackToMap && (
          <button
            onClick={onBackToMap}
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "12px 24px",
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            חזרה למפה
          </button>
        )}
      </div>
    );
  }

  function handleSelect(idx) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    setShowExplanation(true);
    if (idx === safeQuiz[current].answer) setScore(s => s + 1);
  }

  function handleNext() {
    if (current + 1 >= safeQuiz.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
      setShowExplanation(false);
      setHintsShown(0);
    }
  }

  // ── Results screen ──────────────────────────────────────────────────────
  if (finished) {
    const pct       = Math.round((score / safeQuiz.length) * 100);
    const earned    = Math.round(chapterXP * (pct / 100));
    const timeSecs  = Math.round((Date.now() - startTimeRef.current) / 1000);
    const isFast    = timeSecs < 60;
    const emoji     = pct === 100 ? "🏆" : pct >= 70 ? "⭐" : pct >= 50 ? "💪" : "📚";
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ fontSize: 72, marginBottom: 16 }}>{emoji}</div>
        <div style={{ fontSize: 32, fontWeight: 900, color: "#f0f9ff", marginBottom: 8 }}>
          {score}/{safeQuiz.length} נכון!
        </div>
        <div style={{ fontSize: 48, fontWeight: 900, color: "#fbbf24", marginBottom: 8, textShadow: "0 0 30px #fbbf2488" }}>
          +{earned} XP
        </div>
        {isFast && (
          <div style={{ fontSize: 13, color: "#fcd34d", marginBottom: 8 }}>⚡ מהיר להפליא! {timeSecs} שניות</div>
        )}
        <div style={{ color: "#94a3b8", marginBottom: 32 }}>
          {pct === 100
            ? `מושלם! אתה ${courseName} אלוף! 🎯`
            : pct >= 70
              ? "כל הכבוד! כמעט מושלם 🌟"
              : "טוב! חזור על החומר ונסה שוב 💪"}
        </div>
        <button
          onClick={() => onComplete(earned, score, safeQuiz.length, isFast)}
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
  const q = safeQuiz[current];
  return (
    <div style={{ maxWidth: 620, margin: "0 auto" }}>
      {/* Progress */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, alignItems: "center" }}>
        <div style={{ color: "#94a3b8", fontSize: 14 }}>שאלה {current + 1} מתוך {safeQuiz.length}</div>
        <div style={{ display: "flex", gap: 6 }}>
          {safeQuiz.map((_, i) => (
            <div key={i} style={{
              width: 10, height: 10, borderRadius: "50%",
              background: i < current ? "#22c55e" : i === current ? "#6366f1" : "rgba(255,255,255,0.1)"
            }} />
          ))}
        </div>
      </div>

      {/* Bug badge */}
      {q.type === "bug" && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)",
          borderRadius: 99, padding: "6px 14px", marginBottom: 12,
          fontSize: 13, fontWeight: 700, color: "#fca5a5"
        }}>🐛 מצא את הבאג</div>
      )}

      {/* Question text */}
      <div style={{
        background: q.type === "bug" ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.05)",
        borderRadius: 16, padding: 24,
        marginBottom: 20,
        border: q.type === "bug" ? "1px solid rgba(239,68,68,0.25)" : "1px solid rgba(255,255,255,0.1)",
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

      {/* Hints */}
      {q.hints && !answered && (
        <div style={{ marginBottom: 16 }}>
          {q.hints.slice(0, hintsShown).map((hint, i) => (
            <div key={i} style={{
              background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.25)",
              borderRadius: 10, padding: "10px 14px", marginBottom: 8,
              fontSize: 13, color: "#fcd34d", lineHeight: 1.55
            }}>💡 <strong>רמז {i + 1}:</strong> {hint}</div>
          ))}
          {hintsShown < q.hints.length && (
            <button onClick={() => setHintsShown(h => h + 1)} style={{
              background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)",
              color: "#fbbf24", borderRadius: 10, padding: "8px 16px",
              fontSize: 13, cursor: "pointer", fontFamily: "inherit"
            }}>💡 רמז {hintsShown + 1}</button>
          )}
        </div>
      )}

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {q.options.map((opt, idx) => {
          let bg     = "rgba(255,255,255,0.04)";
          let border = "1px solid rgba(255,255,255,0.1)";
          let color  = "#e2e8f0";
          const isCorrect  = answered && idx === q.answer;
          const isWrong    = answered && idx === selected && idx !== q.answer;
          if (isCorrect) { bg = "rgba(34,197,94,0.15)";  border = "1px solid #22c55e"; color = "#86efac"; }
          if (isWrong)   { bg = "rgba(239,68,68,0.15)";  border = "1px solid #ef4444"; color = "#fca5a5"; }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              tabIndex={answered ? -1 : 0}
              role="radio"
              aria-checked={selected === idx}
              aria-label={`תשובה ${String.fromCharCode(65 + idx)}: ${opt}`}
              onKeyDown={e => {
                if (!answered && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  handleSelect(idx);
                }
              }}
              style={{
                background: bg, border, color, borderRadius: 12,
                padding: "14px 20px", fontSize: 15, cursor: answered ? "default" : "pointer",
                textAlign: "right", fontFamily: "inherit",
                display: "flex", alignItems: "center", gap: 12,
                transition: "background 0.25s ease, border-color 0.25s ease, transform 0.15s ease",
                transform: isCorrect ? "scale(1.01)" : "scale(1)",
                outline: "none"
              }}
              onMouseEnter={e => { if (!answered) e.currentTarget.style.background = "rgba(255,255,255,0.09)"; }}
              onMouseLeave={e => { if (!answered) e.currentTarget.style.background = bg; }}
              onFocus={e => { if (!answered) e.currentTarget.style.boxShadow = "0 0 0 2px #6366f1"; }}
              onBlur={e => { e.currentTarget.style.boxShadow = "none"; }}
            >
              <span style={{
                minWidth: 28, height: 28, borderRadius: "50%",
                background:
                  isCorrect ? "#22c55e" :
                  isWrong   ? "#ef4444" :
                  "rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, flexShrink: 0,
                transition: "background 0.25s ease"
              }}>
                {isCorrect ? "✓" : isWrong ? "✗" : String.fromCharCode(65 + idx)}
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
          {current + 1 >= safeQuiz.length ? "סיים את החידון! 🎉" : "שאלה הבאה ➜"}
        </button>
      )}
    </div>
  );
}
