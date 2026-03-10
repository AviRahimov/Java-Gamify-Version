export const RANKS = [
  { name: "Newbie Coder",    minXP: 0,    icon: "🥚", color: "#94a3b8" },
  { name: "Junior Dev",      minXP: 200,  icon: "🐣", color: "#60a5fa" },
  { name: "Code Apprentice", minXP: 500,  icon: "⚔️", color: "#34d399" },
  { name: "Java Knight",     minXP: 900,  icon: "🛡️", color: "#f59e0b" },
  { name: "Senior Dev",      minXP: 1500, icon: "🏆", color: "#f472b6" },
  { name: "Java Master",     minXP: 2200, icon: "🌟", color: "#a78bfa" },
  { name: "Code Legend",     minXP: 3000, icon: "👑", color: "#fbbf24" },
];

export function getRank(xp) {
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (xp >= RANKS[i].minXP) return RANKS[i];
  }
  return RANKS[0];
}

export function getNextRank(xp) {
  for (let i = 0; i < RANKS.length; i++) {
    if (xp < RANKS[i].minXP) return RANKS[i];
  }
  return null;
}
