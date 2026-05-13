import { getRank, getNextRank } from "../data/ranks.js";

export default function XPBar({ xp }) {
  const rank     = getRank(xp);
  const nextRank = getNextRank(xp);
  const progress = nextRank
    ? ((xp - rank.minXP) / (nextRank.minXP - rank.minXP)) * 100
    : 100;
  const xpToNext = nextRank ? nextRank.minXP - xp : 0;

  return (
    <div style={{
      background: "rgba(255,255,255,0.05)", borderRadius: 12,
      padding: "12px 16px", border: "1px solid rgba(255,255,255,0.1)"
    }}>
      <style>{`
        @media (max-width: 480px) {
          .xpbar-labels { font-size: 10px !important; }
          .xpbar-rank   { font-size: 12px !important; }
        }
      `}</style>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          <span style={{ fontSize: 22, flexShrink: 0 }}>{rank.icon}</span>
          <div style={{ minWidth: 0 }}>
            <div className="xpbar-rank" style={{ color: rank.color, fontWeight: 700, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{rank.name}</div>
            <div className="xpbar-labels" style={{ color: "#94a3b8", fontSize: 11 }}>{xp} XP</div>
          </div>
        </div>
        {nextRank && (
          <div className="xpbar-labels" style={{ color: "#64748b", fontSize: 11, textAlign: "left", flexShrink: 0 }}>
            <div style={{ whiteSpace: "nowrap" }}>→ {nextRank.name}</div>
            <div style={{ color: rank.color, fontWeight: 700 }}>{xpToNext} XP נותרו</div>
          </div>
        )}
      </div>
      <div
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${rank.name} – ${xp} XP`}
        style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 8, overflow: "hidden" }}
      >
        <div style={{
          height: "100%", borderRadius: 99,
          background: `linear-gradient(90deg, ${rank.color}, ${rank.color}cc)`,
          width: `${Math.min(progress, 100)}%`,
          transition: "width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          boxShadow: `0 0 12px ${rank.color}88`
        }} />
      </div>
    </div>
  );
}
