import { useState } from "react";
import { getTodaysChallenge } from "../data/challenges.js";

export default function DailyChallenge({ onComplete, onClose, alreadyDoneToday }) {
  const challenge = getTodaysChallenge();
  const [selected,  setSelected]  = useState(null);
  const [answered,  setAnswered]  = useState(false);

  const today = new Date().toLocaleDateString("he-IL", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });

  if (alreadyDoneToday) {
    return (
      <div style={{
        minHeight: "100vh", background: "#020617", display: "flex",
        alignItems: "center", justifyContent: "center",
        fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl"
      }}>
        <div style={{ maxWidth: 440, width: "100%", padding: "0 20px", textAlign: "center" }}>
          <div style={{ fontSize: 72, marginBottom: 16 }}>✅</div>
          <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>כבר השלמת את האתגר היום!</div>
          <div style={{ color: "#64748b", marginBottom: 8 }}>{today}</div>
          <div style={{ color: "#64748b", marginBottom: 32 }}>חזור מחר לאתגר חדש 🌟</div>
          <button onClick={onClose} style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff", border: "none", borderRadius: 14,
            padding: "14px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer"
          }}>← חזרה למפה</button>
        </div>
      </div>
    );
  }

  function handleSelect(idx) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
  }

  function handleClaim() {
    const correct = selected === challenge.answer;
    onComplete(correct ? challenge.xpReward : 0, correct);
  }

  return (
    <div style={{
      minHeight: "100vh", background: "#020617",
      fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl"
    }}>
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 50% 0%, rgba(251,191,36,0.1) 0%, transparent 60%)"
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 660, margin: "0 auto", padding: "24px 16px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "#94a3b8", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 14
          }}>← חזרה</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>⚡</div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>אתגר יומי</div>
          </div>
          <div style={{
            fontSize: 13, color: "#fbbf24", fontWeight: 700,
            background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.25)",
            borderRadius: 99, padding: "4px 12px"
          }}>+{challenge.xpReward} XP</div>
        </div>

        {/* Date badge */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <span style={{
            fontSize: 12, color: "#64748b",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 99, padding: "6px 16px"
          }}>{today}</span>
        </div>

        {/* Challenge card */}
        <div style={{
          background: "linear-gradient(135deg, rgba(251,191,36,0.08), rgba(245,158,11,0.04))",
          border: "1px solid rgba(251,191,36,0.3)",
          borderRadius: 18, padding: "22px 24px", marginBottom: 20
        }}>
          <div style={{ fontSize: 13, color: "#fbbf24", fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
            ⚡ {challenge.title}
          </div>
          <div style={{ fontSize: 15, color: "#fcd34d", lineHeight: 1.65, marginBottom: 16 }}>
            {challenge.description}
          </div>
          {/* Code block */}
          <div style={{
            background: "#0f172a", borderRadius: 10, padding: "14px 16px",
            border: "1px solid rgba(99,102,241,0.25)", direction: "ltr"
          }}>
            <pre style={{
              margin: 0, fontSize: 13, lineHeight: 1.7,
              color: "#93c5fd", fontFamily: "'JetBrains Mono','Fira Code','Courier New',monospace",
              overflowX: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word"
            }}>{challenge.code}</pre>
          </div>
        </div>

        {/* Question */}
        <div style={{
          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 14, padding: "16px 20px", marginBottom: 18,
          fontSize: 16, fontWeight: 700, color: "#f0f9ff"
        }}>
          🤔 {challenge.question}
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {challenge.options.map((opt, idx) => {
            let bg     = "rgba(255,255,255,0.04)";
            let border = "1px solid rgba(255,255,255,0.1)";
            let color  = "#e2e8f0";
            if (answered) {
              if (idx === challenge.answer)                           { bg = "rgba(34,197,94,0.15)";  border = "1px solid #22c55e"; color = "#86efac"; }
              else if (idx === selected && idx !== challenge.answer) { bg = "rgba(239,68,68,0.15)";  border = "1px solid #ef4444"; color = "#fca5a5"; }
            } else if (selected === idx) {
              bg = "rgba(99,102,241,0.18)"; border = "1px solid #6366f1"; color = "#a5b4fc";
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
                  background: answered && idx === challenge.answer ? "#22c55e"
                            : answered && idx === selected         ? "#ef4444"
                            : "rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, flexShrink: 0
                }}>
                  {answered && idx === challenge.answer ? "✓"
                   : answered && idx === selected       ? "✗"
                   : String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explanation + CTA */}
        {answered && (
          <>
            <div style={{
              background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: 12, padding: "14px 18px", marginBottom: 20,
              fontSize: 14, color: "#c7d2fe", lineHeight: 1.6
            }}>
              💡 <strong>הסבר:</strong> {challenge.explanation}
            </div>
            <button onClick={handleClaim} style={{
              width: "100%",
              background: selected === challenge.answer
                ? "linear-gradient(135deg, #fbbf24, #f59e0b)"
                : "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: selected === challenge.answer ? "#000" : "#fff",
              border: "none", borderRadius: 16,
              padding: "18px", fontSize: 18, fontWeight: 700,
              cursor: "pointer", boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
            }}>
              {selected === challenge.answer
                ? `🎉 תבעו +${challenge.xpReward} XP!`
                : "💪 בסדר, קיבלתי — חזרה למפה"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
