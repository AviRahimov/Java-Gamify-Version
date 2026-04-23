export const CHALLENGES = [
  {
    id: "p1", title: "ספירה יפה", description: "מה יודפס כשאריץ פונקציית טווח?",
    code: `for i in range(2, 5):\n  print(i)`,
    question: "מה יודפס?", options: ["2 3 4 5", "2 3 4 3 4 5", "2 3 4", "שגיאה"], answer: 2, explanation: "range רץ מההתחלה ועד לפני סוף המספר 5.", xpReward: 35
  },
  {
    id: "p2", title: "הרשימה הארוכה", description: "כמה רחוק נגיע?",
    code: `lst = [1, 2, 3]\nprint(lst[3])`,
    question: "מה הפלט?", options: ["3", "null", "IndexError", "None"], answer: 2, explanation: "ניסיון לגשת לאינדקס מחוץ למערך יזרוק IndexError בפייתון.", xpReward: 40
  },
  {
    id: "p3", title: "חיבורים מוזרים", description: "מה התוצאה של הפקודה?",
    code: `x = 2 + int("5")`,
    question: "מה יהיה הערך שיוכנס למשתנה x?", options: ["25", "7", "TypeError", "None"], answer: 1, explanation: "המרה למספר מתבצעת כראוי, 2 ועוד 5 הם מן הסתם 7.", xpReward: 45
  }
];// python challenges placeholder 
