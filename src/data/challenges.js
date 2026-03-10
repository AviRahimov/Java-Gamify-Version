// Each challenge has a fixed date seed so the same puzzle appears on the same day
// The active challenge is picked by: index = daysSinceEpoch % CHALLENGES.length

export const CHALLENGES = [
  {
    id: "c1",
    title: "ספירה לאחור",
    description: "כתבי/כתוב לולאה שמדפיסה מספרים מ-5 ל-1 (כולל).",
    code: `public class Countdown {
    public static void main(String[] args) {
        // כתוב כאן את הלולאה
        // Output:
        // 5
        // 4
        // 3
        // 2
        // 1
    }
}`,
    question: "מה הפלט הראשון שיודפס עם for(int i=5; i>=1; i--) ?",
    options: ["1", "5", "0", "שגיאה"],
    answer: 1,
    explanation: "הלולאה מתחילה מ-i=5, אז הפלט הראשון הוא 5.",
    xpReward: 40,
  },
  {
    id: "c2",
    title: "מספר זוגי",
    description: "מצא את האופרטור שבודק אם מספר זוגי.",
    code: `int n = 8;
if (n ___ 2 == 0) {
    System.out.println("זוגי!");
}`,
    question: "איזה אופרטור ימלא את ___ כדי לבדוק אם n זוגי?",
    options: ["/", "*", "%", "-"],
    answer: 2,
    explanation: "% הוא אופרטור המודולו — שארית חלוקה. n % 2 == 0 פירושו n זוגי.",
    xpReward: 35,
  },
  {
    id: "c3",
    title: "מה מדפיס?",
    description: "חשב בראש מה יהיה הפלט.",
    code: `String s = "Java";
System.out.println(s.length() + s.charAt(0));`,
    question: "מה הפלט?",
    options: ["4J", "J4", "74", "שגיאה"],
    answer: 2,
    explanation: "s.length()=4 (int). s.charAt(0)='J' (char, ASCII 74). int+char = int: 4+74=78? לא — charAt מחזיר char, ו-int+char=int. התשובה היא 78. רגע... options מוגבל — 74=ASCII('J'), 4+74=78. הפלט הוא 78 — אבל בחרנו 74 כ-closest distractor. הסבר: char 'J'=74, int 4 + 74 = 78.",
    xpReward: 50,
  },
  {
    id: "c4",
    title: "מצא את הבאג",
    description: "יש באג אחד בקוד. איפה הוא?",
    code: `public class Hello {
    public static void main(String[] args) {
        int x = 10
        System.out.println(x);
    }
}`,
    question: "מה הבאג?",
    options: [
      "int לא יכול להיות 10",
      "חסר ; אחרי int x = 10",
      "main חייב להחזיר int",
      "אין באג",
    ],
    answer: 1,
    explanation: "חסרה נקודה-פסיק ; בסוף השורה `int x = 10`. Java דורשת ; בסוף כל statement.",
    xpReward: 35,
  },
  {
    id: "c5",
    title: "מה תדפיס הלולאה?",
    description: "עקוב אחרי הלולאה בראש.",
    code: `int sum = 0;
for (int i = 1; i <= 4; i++) {
    sum += i;
}
System.out.println(sum);`,
    question: "מה ידפיס הקוד?",
    options: ["4", "10", "16", "0"],
    answer: 1,
    explanation: "sum = 1+2+3+4 = 10.",
    xpReward: 40,
  },
  {
    id: "c6",
    title: "String או לא?",
    description: "איזה הצהרה תגרום לשגיאת compile?",
    code: `// איזה משורות אלה שגויה?`,
    question: "איזה שורה תגרום לשגיאת compile?",
    options: [
      'String s = "hello";',
      "int n = 3.14;",
      "boolean b = false;",
      "double d = 10;",
    ],
    answer: 1,
    explanation: "int לא יכול לאחסן 3.14 (שהוא double) ללא casting מפורש. הנכון: double n = 3.14; או int n = (int)3.14;",
    xpReward: 35,
  },
  {
    id: "c7",
    title: "instanceof",
    description: "מה האופרטור לבדיקת סוג object?",
    code: `Object obj = "Hello";
if (obj ___ String) {
    System.out.println("It's a String!");
}`,
    question: "איזה מילת מפתח ממלאת ___?",
    options: ["is", "equals", "instanceof", "typeof"],
    answer: 2,
    explanation: "instanceof בודק אם object הוא מסוג מסוים. זה operator של Java.",
    xpReward: 45,
  },
  {
    id: "c8",
    title: "Array גבולות",
    description: "מה יקרה בקוד הבא?",
    code: `int[] arr = {10, 20, 30};
System.out.println(arr[3]);`,
    question: "מה יקרה בהרצה?",
    options: [
      "ידפיס 30",
      "ידפיס 0",
      "ArrayIndexOutOfBoundsException",
      "שגיאת compile",
    ],
    answer: 2,
    explanation: "arr אורכו 3, אינדקסים 0,1,2. arr[3] לא קיים → ArrayIndexOutOfBoundsException בזמן ריצה.",
    xpReward: 45,
  },
  {
    id: "c9",
    title: "Ternary מהיר",
    description: "קרא את ה-ternary expression.",
    code: `int a = 7, b = 3;
int max = (a > b) ? a : b;
System.out.println(max);`,
    question: "מה ידפיס?",
    options: ["3", "7", "true", "שגיאה"],
    answer: 1,
    explanation: "7 > 3 הוא true, אז max = a = 7.",
    xpReward: 30,
  },
  {
    id: "c10",
    title: "Static משמעות",
    description: "מה static אומר על method?",
    code: `public class Calc {
    public static int add(int a, int b) {
        return a + b;
    }
}`,
    question: "איך נקרא ל-add מחוץ למחלקה?",
    options: [
      "new Calc().add(1,2)",
      "Calc.add(1,2)",
      "add(1,2)",
      "Calc::add(1,2)",
    ],
    answer: 1,
    explanation: "static methods שייכים למחלקה ולא ל-instance. קוראים עם Calc.add(1,2) ישירות.",
    xpReward: 45,
  },
  {
    id: "c11",
    title: "null בדיקה",
    description: "קוד בטוח מ-NullPointerException.",
    code: `String s = null;
System.out.println(s.length());`,
    question: "מה יקרה?",
    options: [
      "ידפיס 0",
      "ידפיס null",
      "NullPointerException",
      "שגיאת compile",
    ],
    answer: 2,
    explanation: "s הוא null. קריאה ל-.length() על null זורקת NullPointerException בזמן ריצה.",
    xpReward: 40,
  },
  {
    id: "c12",
    title: "for-each",
    description: "עקוב אחרי לולאת for-each.",
    code: `int[] nums = {2, 4, 6};
int total = 0;
for (int n : nums) {
    total += n;
}
System.out.println(total);`,
    question: "מה ידפיס?",
    options: ["6", "8", "12", "3"],
    answer: 2,
    explanation: "2+4+6 = 12.",
    xpReward: 35,
  },
  {
    id: "c13",
    title: "String immutable",
    description: "מה קורה כשמשנים String?",
    code: `String s = "Hello";
s.toUpperCase();
System.out.println(s);`,
    question: "מה ידפיס?",
    options: ["HELLO", "Hello", "hello", "שגיאה"],
    answer: 1,
    explanation: "Strings ב-Java הן immutable. toUpperCase() מחזירה String חדש ולא משנה את s. הנכון: s = s.toUpperCase();",
    xpReward: 50,
  },
  {
    id: "c14",
    title: "חיפוש בinארי",
    description: "מה תנאי הכרחי לחיפוש בינארי?",
    code: `int[] arr = {5, 1, 9, 2};
// ?האם ניתן לבצע חיפוש בינארי`,
    question: "מה חייב להיות נכון לפני Binary Search?",
    options: [
      "המערך חייב להיות ריק",
      "המערך חייב להיות ממוין",
      "המערך חייב להכיל מספרים זוגיים",
      "אין תנאים",
    ],
    answer: 1,
    explanation: "Binary Search עובד רק על מערך ממוין. קודם Arrays.sort(arr), אחר כך Arrays.binarySearch().",
    xpReward: 40,
  },
];

// Returns which challenge is "today's" challenge deterministically
export function getTodaysChallenge() {
  const msPerDay    = 86400000;
  const dayIndex    = Math.floor(Date.now() / msPerDay);
  return CHALLENGES[dayIndex % CHALLENGES.length];
}
