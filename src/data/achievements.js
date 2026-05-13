export const ACHIEVEMENTS = [
  {
    id: "first_blood",
    icon: "⚔️",
    name: "ניצחון ראשון",
    desc: "סיים את הפרק הראשון",
    color: "#60a5fa",
    check: ({ completedChapters }) => Object.keys(completedChapters).length >= 1,
  },
  {
    id: "three_day_streak",
    icon: "📅",
    name: "עקבי",
    desc: "3 ימי רצף ללמידה",
    color: "#34d399",
    check: ({ streak }) => streak >= 3,
  },
  {
    id: "on_fire",
    icon: "🔥",
    name: "בוער!",
    desc: "7 ימי רצף ללמידה",
    color: "#f97316",
    check: ({ streak }) => streak >= 7,
  },
  {
    id: "perfectionist",
    icon: "💯",
    name: "פרפקציוניסט",
    desc: "קבל 100% בחידון כלשהו",
    color: "#fbbf24",
    check: ({ quizScores }) => Object.values(quizScores).some(s => s === 100),
  },
  {
    id: "speed_coder",
    icon: "⚡",
    name: "מקודד מהיר",
    desc: "סיים חידון תוך פחות מ-60 שניות",
    color: "#fcd34d",
    check: ({ fastQuiz }) => !!fastQuiz,
  },
  {
    id: "xp_500",
    icon: "💎",
    name: "אספן XP",
    desc: "הגע ל-500 XP",
    color: "#38bdf8",
    check: ({ xp }) => xp >= 500,
  },
  {
    id: "half_way",
    icon: "🌗",
    name: "חצי הדרך",
    desc: "סיים חצי מהפרקים",
    color: "#a78bfa",
    check: ({ completedChapters, totalChapters }) =>
      totalChapters > 0 && Object.keys(completedChapters).length >= Math.ceil(totalChapters / 2),
  },
  {
    id: "xp_1000",
    icon: "👑",
    name: "מאסטר XP",
    desc: "הגע ל-1000 XP",
    color: "#f59e0b",
    check: ({ xp }) => xp >= 1000,
  },
  {
    id: "comeback",
    icon: "💪",
    name: "מנסה שוב",
    desc: "השלם חידון גם אחרי תוצאה נמוכה",
    color: "#94a3b8",
    check: ({ quizScores }) => Object.values(quizScores).some(s => s > 0 && s < 60),
  },
  {
    id: "graduated",
    icon: "🎓",
    name: "בוגר המסלול",
    desc: "סיים את כל הפרקים",
    color: "#c084fc",
    check: ({ completedChapters, totalChapters }) =>
      totalChapters > 0 && Object.keys(completedChapters).length >= totalChapters,
  },
  {
    id: "graduated_python",
    icon: "🐍",
    name: "בוגר Python",
    desc: "סיים את כל פרקי Python",
    color: "#34d399",
    check: ({ completedChapters, totalChapters, course }) =>
      course === "python" && totalChapters > 0 && Object.keys(completedChapters).length >= totalChapters,
  },
];

export function getEarnedAchievements(stats) {
  return ACHIEVEMENTS.filter(a => a.check(stats));
}
