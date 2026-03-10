import { getRank, getNextRank } from "../data/ranks.js";

export default function XPBar({ xp }) {
  const rank     = getRank(xp);
  const nextRank = getNextRank(xp);
  const progress = nextRank
    ? ((xp - rank.minXP) / (nextRank.minXP - rank.minXP)) * 100
    : 100;

  return (
    <div style={{
      background: "rgba(255,255,255,0.05)", borderRadius: 12,
      padding: "12px 16px", border: "1px solid rgba(255,255,255,0.1)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 22 }}>{rank.icon}</span>
          <div>
            <div style={{ color: rank.color, fontWeight: 700, fontSize: 13 }}>{rank.name}</div>
            <div style={{ color: "#94a3b8", fontSize: 11 }}>{xp} XP</div>
          </div>
        </div>
        {nextRank && (
          <div style={{ color: "#64748b", fontSize: 11 }}>
            → {nextRank.name} ({nextRank.minXP} XP)
          </div>
        )}
      </div>
      <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 8, overflow: "hidden" }}>
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
