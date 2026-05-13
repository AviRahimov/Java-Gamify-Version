
import { useState, useEffect } from "react";
import { getRank }  from "../data/ranks.js";

export default function Dashboard({ xp, chapters, completedChapters, quizScores, streak, courseName = "Java", course = "java", javaXP = 0, pythonXP = 0, onClose }) {
  const rank           = getRank(xp);
  const completedCount = Object.keys(completedChapters).length;
  const totalchapters  = chapters.length;
  const scores         = Object.values(quizScores);
  const avgScore       = scores.length
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    : null;
  const bestScore = scores.length ? Math.max(...scores) : null;

  // Animate progress bars from 0 on mount
  const [barWidth, setBarWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setBarWidth(Math.round((completedCount / totalchapters) * 100)), 80);
    return () => clearTimeout(t);
  }, [completedCount, totalchapters]);

  const [perBarWidths, setPerBarWidths] = useState({});
  useEffect(() => {
    const t = setTimeout(() => {
      const widths = {};
      chapters.forEach(ch => { widths[ch.id] = quizScores[ch.id] ?? 0; });
      setPerBarWidths(widths);
    }, 120);
    return () => clearTimeout(t);
  }, [chapters, quizScores]);

  const showComparison = javaXP > 0 && pythonXP > 0;
  const [javaBarW,   setJavaBarW]   = useState(0);
  const [pythonBarW, setPythonBarW] = useState(0);
  useEffect(() => {
    if (!showComparison) return;
    const max = Math.max(javaXP, pythonXP);
    const t = setTimeout(() => {
      setJavaBarW(Math.round((javaXP / max) * 100));
      setPythonBarW(Math.round((pythonXP / max) * 100));
    }, 150);
    return () => clearTimeout(t);
  }, [javaXP, pythonXP, showComparison]);

  function scoreColor(s) {
    if (s === null) return "#475569";
    if (s >= 90) return "#22c55e";
    if (s >= 70) return "#fbbf24";
    if (s >= 50) return "#f97316";
    return "#ef4444";
  }

  return (
    <div style={{
      minHeight: "100vh", background: "#020617",
      fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl"
    }}>
      <style>{`
        @media (max-width: 480px) {
          .dash-stats { grid-template-columns: 1fr 1fr !important; }
          .dash-quiz-pair { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 60% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)"
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "24px 16px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "#94a3b8", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 14
          }}>← חזרה</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>📊</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>לוח ההתקדמות</div>
          </div>
          <div style={{ width: 80 }} />
        </div>

        {/* Top stats */}
        <div className="dash-stats" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
          {[
            { icon: "⭐", value: xp,                        label: "XP", color: "#fbbf24" },
            { icon: "🔥", value: streak,                    label: "ימי רצף", color: "#f97316" },
            { icon: "📖", value: `${completedCount}/${totalchapters}`, label: "פרקים", color: "#60a5fa" },
            { icon: rank.icon, value: rank.name,            label: "דרגה", color: rank.color, small: true },
          ].map((s, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12, padding: "14px 12px", textAlign: "center"
            }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontSize: s.small ? 12 : 18, fontWeight: 900, color: s.color, wordBreak: "break-word" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Overall progress bar */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14, padding: 20, marginBottom: 24
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>התקדמות כוללת</span>
            <span style={{ color: "#6366f1", fontWeight: 700 }}>
              {Math.round((completedCount / totalchapters) * 100)}%
            </span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={barWidth}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="התקדמות כוללת"
            style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 10, overflow: "hidden" }}
          >
            <div style={{
              height: "100%", borderRadius: 99,
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              width: `${barWidth}%`,
              transition: "width 0.8s cubic-bezier(0.34,1.56,0.64,1)",
              boxShadow: "0 0 12px #6366f188"
            }} />
          </div>
        </div>

        {/* Course comparison */}
        {showComparison && (
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14, padding: 20, marginBottom: 24
          }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>השוואת מסלולים</div>
            {[
              { label: "☕ Java",   xpVal: javaXP,   barW: javaBarW,   color: "#6366f1" },
              { label: "🐍 Python", xpVal: pythonXP, barW: pythonBarW, color: "#10b981" },
            ].map(c => (
              <div key={c.label} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                  <span style={{ fontWeight: 700 }}>{c.label}</span>
                  <span style={{ color: c.color, fontWeight: 700 }}>{c.xpVal} XP</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={c.barW}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${c.label} XP`}
                  style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 8, overflow: "hidden" }}
                >
                  <div style={{
                    height: "100%", borderRadius: 99,
                    background: `linear-gradient(90deg, ${c.color}, ${c.color}aa)`,
                    width: `${c.barW}%`,
                    transition: "width 0.9s cubic-bezier(0.34,1.56,0.64,1)",
                    boxShadow: `0 0 10px ${c.color}66`
                  }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quiz averages */}
        {scores.length > 0 && (
          <div className="dash-quiz-pair" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 12, marginBottom: 24
          }}>
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12, padding: 18, textAlign: "center"
            }}>
              <div style={{ fontSize: 13, color: "#64748b", marginBottom: 6 }}>ממוצע ציוני חידון</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: scoreColor(avgScore) }}>{avgScore}%</div>
            </div>
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12, padding: 18, textAlign: "center"
            }}>
              <div style={{ fontSize: 13, color: "#64748b", marginBottom: 6 }}>הציון הטוב ביותר</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: scoreColor(bestScore) }}>{bestScore}%</div>
            </div>
          </div>
        )}

        {/* Per-chapter scores */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14, overflow: "hidden", marginBottom: 24
        }}>
          <div style={{
            padding: "14px 20px", background: "rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            fontWeight: 700, fontSize: 15
          }}>ציוני חידון לפי פרק</div>
          {chapters.map(ch => {
            const score     = quizScores[ch.id] ?? null;
            const completed = !!completedChapters[ch.id];
            const pct       = perBarWidths[ch.id] ?? 0;
            return (
              <div key={ch.id} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "14px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.05)"
              }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{ch.emoji}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 5, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {ch.title}
                  </div>
                  <div
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`ציון ${ch.title}: ${score !== null ? score + "%" : "טרם הושלם"}`}
                    style={{ background: "rgba(255,255,255,0.08)", borderRadius: 99, height: 6, overflow: "hidden" }}
                  >
                    <div style={{
                      height: "100%", borderRadius: 99,
                      background: `linear-gradient(90deg, ${scoreColor(score)}, ${scoreColor(score)}aa)`,
                      width: `${pct}%`,
                      transition: "width 1s cubic-bezier(0.34,1.56,0.64,1)"
                    }} />
                  </div>
                </div>
                <div style={{
                  minWidth: 44, textAlign: "left", fontSize: 13, fontWeight: 700,
                  color: score !== null ? scoreColor(score) : "#1e293b"
                }}>
                  {score !== null ? `${score}%` : completed ? "—" : "🔒"}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 16, color: "#1e293b", fontSize: 13 }}>
          {courseName} Quest • Built with ☕ and ❤️
        </div>
      </div>
    </div>
  );
}
