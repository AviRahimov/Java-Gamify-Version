import { ACHIEVEMENTS } from "../data/achievements.js";

export default function AchievementsView({ earnedIds, courseName = "Java", course = "java", onClose }) {
  return (
    <div style={{
      minHeight: "100vh", background: "#020617",
      fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl"
    }}>
      <style>{`
        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 0 8px  var(--badge-color, #fbbf24); }
          50%       { box-shadow: 0 0 20px var(--badge-color, #fbbf24), 0 0 40px var(--badge-color, #fbbf24); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .earned-badge {
          animation: badgeGlow 2.5s ease-in-out infinite;
        }
        @media (max-width: 480px) {
          .badge-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 50% 10%, rgba(251,191,36,0.12) 0%, transparent 60%)"
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", padding: "24px 16px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "#94a3b8", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 14
          }}>← חזרה</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>🏆</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>הישגים</div>
          </div>
          <div style={{ fontSize: 13, color: "#fbbf24", fontWeight: 700 }}>
            {earnedIds.length}/{ACHIEVEMENTS.length} 🔓
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: 28 }}>
          <div
            role="progressbar"
            aria-valuenow={Math.round((earnedIds.length / ACHIEVEMENTS.length) * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`הישגים: ${earnedIds.length} מתוך ${ACHIEVEMENTS.length}`}
            style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 8, overflow: "hidden" }}
          >
            <div style={{
              height: "100%", borderRadius: 99,
              background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
              width: `${Math.round((earnedIds.length / ACHIEVEMENTS.length) * 100)}%`,
              transition: "width 0.8s cubic-bezier(0.34,1.56,0.64,1)",
              boxShadow: "0 0 12px #fbbf2488"
            }} />
          </div>
          <div style={{ textAlign: "center", marginTop: 6, fontSize: 12, color: "#64748b" }}>
            {Math.round((earnedIds.length / ACHIEVEMENTS.length) * 100)}% הושלמו
          </div>
        </div>

        {/* Badge grid */}
        <div className="badge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
          {ACHIEVEMENTS.map(a => {
            const earned = earnedIds.includes(a.id);
            return (
              <div
                key={a.id}
                className={earned ? "earned-badge" : ""}
                role="img"
                aria-label={`${a.name}${earned ? " – הושג" : " – טרם הושג"}: ${a.desc}`}
                style={{
                  "--badge-color": a.color,
                  background: earned
                    ? `linear-gradient(135deg, ${a.color}22, ${a.color}0a)`
                    : "rgba(255,255,255,0.03)",
                  border: earned
                    ? `1px solid ${a.color}66`
                    : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14, padding: "18px 16px",
                  textAlign: "center", transition: "all 0.2s",
                  opacity: earned ? 1 : 0.45,
                  filter: earned ? "none" : "grayscale(0.8)"
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 8 }}>{a.icon}</div>
                <div style={{
                  fontSize: 14, fontWeight: 800, marginBottom: 4,
                  color: earned ? a.color : "#64748b"
                }}>{a.name}</div>
                <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{a.desc}</div>
                {earned && (
                  <div style={{
                    marginTop: 8, fontSize: 11, fontWeight: 700,
                    color: a.color, background: `${a.color}22`,
                    borderRadius: 99, padding: "2px 10px", display: "inline-block"
                  }}>✓ הושג!</div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 32, color: "#1e293b", fontSize: 13 }}>
          {courseName} Quest • Built with ☕ and ❤️
        </div>
      </div>
    </div>
  );
}
