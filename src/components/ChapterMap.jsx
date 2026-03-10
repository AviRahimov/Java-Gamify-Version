import { CHAPTERS } from "../data/chapters.js";
import { getRank }   from "../data/ranks.js";
import XPBar         from "./XPBar.jsx";

export default function ChapterMap({ xp, completedChapters, streak, earnedAchievements, dailyDoneToday, onStartChapter, onOpenGlossary, onOpenDashboard, onOpenAchievements, onOpenFlashcards, onOpenDaily }) {
  const rank           = getRank(xp);
  const completedCount = Object.keys(completedChapters).length;
  const totalChapters  = CHAPTERS.length;

  return (
    <div style={{
      minHeight: "100vh", background: "#020617",
      fontFamily: "'Segoe UI','Arial',sans-serif",
      color: "#f0f9ff", direction: "rtl"
    }}>
      {/* Background glow */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background:
          "radial-gradient(ellipse at 20% 20%, rgba(99,102,241,0.15) 0%, transparent 50%)," +
          "radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.1) 0%, transparent 50%)"
      }} />

      <style>{`
        @keyframes floatUp {
          0%   { opacity: 0; transform: translateX(-50%) translateY(20px); }
          20%  { opacity: 1; transform: translateX(-50%) translateY(0);    }
          80%  { opacity: 1; transform: translateX(-50%) translateY(-10px);}
          100% { opacity: 0; transform: translateX(-50%) translateY(-30px);}
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0   rgba(99,102,241,0.4); }
          50%     { box-shadow: 0 0 0 12px rgba(99,102,241,0);   }
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>☕</div>
          <h1 style={{
            fontSize: 38, fontWeight: 900, margin: 0,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Java Quest</h1>
          <p style={{ color: "#64748b", margin: "8px 0 0", fontSize: 16 }}>
            למד Java בדרך הכי מגניבה שיש ⚔️
          </p>
        </div>

        {/* Nav buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
          {[
            { label: "📖 מילון",         fn: onOpenGlossary },
            { label: "📊 התקדמות",       fn: onOpenDashboard },
            { label: `🏆 הישגים${earnedAchievements.length > 0 ? ` (${earnedAchievements.length})` : ""}`, fn: onOpenAchievements },
            { label: "🃏 כרטיסיות",       fn: onOpenFlashcards },
            { label: `⚡ אתגר יומי${dailyDoneToday ? " ✓" : ""}`, fn: onOpenDaily },
          ].map((btn, i) => (
            <button key={i} onClick={btn.fn} style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#cbd5e1", borderRadius: 10, padding: "8px 18px",
              fontSize: 13, cursor: "pointer", fontFamily: "inherit"
            }}>{btn.label}</button>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
          {[
            { icon: "🔥", value: streak, label: "ימי רצף",  color: "#f97316" },
            { icon: "📖", value: `${completedCount}/${totalChapters}`, label: "פרקים", color: "#60a5fa" },
            { icon: rank.icon, value: rank.name, label: "דרגה", color: rank.color, small: true }
          ].map((s, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "14px 16px",
              border: "1px solid rgba(255,255,255,0.08)", textAlign: "center"
            }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontSize: s.small ? 13 : 20, fontWeight: 900, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#64748b" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* XP Bar */}
        <div style={{ marginBottom: 32 }}>
          <XPBar xp={xp} />
        </div>

        {/* Chapter Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {CHAPTERS.map((ch, idx) => {
            const isCompleted = !!completedChapters[ch.id];
            const isLocked    = idx > 0 && !completedChapters[CHAPTERS[idx - 1].id];
            const isNext      = !isLocked && !isCompleted;

            return (
              <div
                key={ch.id}
                onClick={() => !isLocked && onStartChapter(ch)}
                style={{
                  background: isCompleted
                    ? "linear-gradient(135deg,rgba(34,197,94,0.1),rgba(16,185,129,0.05))"
                    : isNext
                      ? "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.08))"
                      : "rgba(255,255,255,0.02)",
                  border: isCompleted
                    ? "1px solid rgba(34,197,94,0.4)"
                    : isNext
                      ? "1px solid rgba(99,102,241,0.5)"
                      : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16, padding: 20,
                  cursor: isLocked ? "not-allowed" : "pointer",
                  opacity: isLocked ? 0.4 : 1,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  animation: isNext ? "pulse 2s infinite" : "none",
                  position: "relative", overflow: "hidden"
                }}
                onMouseEnter={e => { if (!isLocked) e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {isCompleted && (
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    background: "#22c55e", borderRadius: "50%",
                    width: 24, height: 24, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 13, fontWeight: 700
                  }}>✓</div>
                )}
                {isLocked && (
                  <div style={{ position: "absolute", top: 12, left: 12, fontSize: 18 }}>🔒</div>
                )}

                <div style={{ fontSize: 36, marginBottom: 12 }}>{ch.emoji}</div>
                <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{ch.title}</div>
                <div style={{ fontSize: 13, color: "#64748b", marginBottom: 12 }}>{ch.subtitle}</div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{
                    fontSize: 12, padding: "4px 10px", borderRadius: 99,
                    background: isCompleted ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.06)",
                    color: isCompleted ? "#86efac" : "#94a3b8"
                  }}>{ch.difficulty}</div>
                  <div style={{ fontSize: 13, color: "#fbbf24", fontWeight: 700 }}>+{ch.xpReward} XP ⭐</div>
                </div>

                <div style={{ marginTop: 12, fontSize: 12, color: "#475569" }}>
                  {ch.lessons.length} שיעורים • {ch.quiz.length} שאלות
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 32, color: "#1e293b", fontSize: 13 }}>
          Java Quest • Created by Avi Rahimov ☕
        </div>
      </div>
    </div>
  );
}
