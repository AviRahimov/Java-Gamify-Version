export const FLASHCARDS = [
  // ── Chapter 1 ────────────────────────────────────────────────────────────
  { id: "f1",  chapter: 1, front: "מה הפקודה להדפסת טקסט ב-Java?",                      back: "System.out.println(\"text\");" },
  { id: "f2",  chapter: 1, front: "במה מסתיים כל statement ב-Java?",                     back: "; (נקודה-פסיק)" },
  { id: "f3",  chapter: 1, front: "מה זה 'Write Once, Run Anywhere'?",                  back: "קוד Java מקומפל ל-bytecode ורץ בכל מכונה שיש בה JVM" },
  { id: "f4",  chapter: 1, front: "מה ההבדל בין print ל-println?",                      back: "println מוסיף ירידת שורה (\\n) בסוף. print לא." },
  { id: "f5",  chapter: 1, front: "איך כותבים הערה בשורה אחת ב-Java?",                  back: "// זהו הערה חד-שורתית" },
  { id: "f6",  chapter: 1, front: "איך מצהירים על משתנה שלם?",                          back: "int myVar = 5;" },

  // ── Chapter 2 ────────────────────────────────────────────────────────────
  { id: "f7",  chapter: 2, front: "מה 8 הסוגים הפרימיטיביים ב-Java?",                  back: "byte, short, int, long, float, double, boolean, char" },
  { id: "f8",  chapter: 2, front: "איזה type משמש לאחסון true/false?",                  back: "boolean" },
  { id: "f9",  chapter: 2, front: "מה ההבדל בין int לבין double?",                      back: "int = מספר שלם. double = מספר עשרוני (64-bit)." },
  { id: "f10", chapter: 2, front: "למה String הוא לא primitive?",                       back: "String הוא Object — מחלקה מלאה עם methods כמו .length(), .equals() וכד'" },
  { id: "f11", chapter: 2, front: "איך משווים שתי Strings נכון?",                       back: "a.equals(b) — לא a == b!" },
  { id: "f12", chapter: 2, front: "מה זה Narrowing Casting?",                           back: "המרה ידנית מ-type גדול לקטן: int x = (int) 3.99; → x = 3" },

  // ── Chapter 3 ────────────────────────────────────────────────────────────
  { id: "f13", chapter: 3, front: "מה אופרטור AND הלוגי ב-Java?",                      back: "&& (שני ampersands)" },
  { id: "f14", chapter: 3, front: "מה אופרטור OR הלוגי ב-Java?",                       back: "|| (שני pipes)" },
  { id: "f15", chapter: 3, front: "מה ה-Ternary Operator?",                             back: "condition ? valueIfTrue : valueIfFalse\nלמשל: int max = a > b ? a : b;" },
  { id: "f16", chapter: 3, front: "מה קורה בלי break ב-switch?",                       back: "Fall-through: Java ממשיכה לcase הבא גם אם המקרה לא התאים" },
  { id: "f17", chapter: 3, front: "מה ההבדל בין = לבין ==?",                           back: "= מציב ערך. == משווה ערכים (שוויון)" },

  // ── Chapter 4 ────────────────────────────────────────────────────────────
  { id: "f18", chapter: 4, front: "מה ההבדל בין for לבין while?",                      back: "for מתאים כשיודעים כמה פעמים. while מתאים כשתלוי בתנאי דינמי." },
  { id: "f19", chapter: 4, front: "מה ההבדל בין break לבין continue?",                 back: "break יוצא מהלולאה לגמרי. continue מדלג לאיטרציה הבאה." },
  { id: "f20", chapter: 4, front: "מה לולאת do-while מבטיחה?",                         back: "שהגוף ירוץ לפחות פעם אחת — תנאי נבדק רק בסוף" },
  { id: "f21", chapter: 4, front: "מה i++ שונה מ-++i?",                                back: "i++ מחזיר את הערך לפני הגדלה. ++i מחזיר אחרי הגדלה." },

  // ── Chapter 5 ────────────────────────────────────────────────────────────
  { id: "f22", chapter: 5, front: "איך מצהירים על array של 5 ints?",                   back: "int[] arr = new int[5];\nאו: int[] arr = {1,2,3,4,5};" },
  { id: "f23", chapter: 5, front: "מה האינדקס של האיבר הראשון ב-array?",              back: "0 — כל ה-arrays ב-Java מתחילים מ-0" },
  { id: "f24", chapter: 5, front: "מה ההבדל בין Array לבין ArrayList?",               back: "Array — גודל קבוע. ArrayList — גודל דינמי, עובד עם Objects." },
  { id: "f25", chapter: 5, front: "איך מוסיפים איבר ל-ArrayList?",                     back: "list.add(value);" },
  { id: "f26", chapter: 5, front: "מה זה NullPointerException?",                        back: "שגיאה שמתרחשת כשמנסים לגשת ל-object שהוא null" },

  // ── Chapter 6 ────────────────────────────────────────────────────────────
  { id: "f27", chapter: 6, front: "מה הסיבה הכי גדולה לכתוב פונקציות?",              back: "DRY — Don't Repeat Yourself. כותבים קוד פעם אחת ומשתמשים בו הרבה." },
  { id: "f28", chapter: 6, front: "מה void אומר בהגדרת פונקציה?",                     back: "הפונקציה לא מחזירה ערך" },
  { id: "f29", chapter: 6, front: "מה zה Method Overloading?",                         back: "מספר מתודות עם אותו שם אבל פרמטרים שונים באותה מחלקה" },
  { id: "f30", chapter: 6, front: "מה ההבדל בין parameter לבין argument?",            back: "parameter = משתנה בהגדרת הפונקציה. argument = הערך שמועבר בקריאה." },

  // ── Chapter 7 ────────────────────────────────────────────────────────────
  { id: "f31", chapter: 7, front: "מה זה class ב-Java?",                               back: "תבנית (blueprint) ליצירת objects. מגדיר שדות ומתודות." },
  { id: "f32", chapter: 7, front: "מה זה constructor?",                                back: "מתודה מיוחדת שרצה בעת יצירת object עם new. שם זהה לשם המחלקה." },
  { id: "f33", chapter: 7, front: "מה this מייצג?",                                    back: "מתייחס ל-instance הנוכחי של המחלקה" },
  { id: "f34", chapter: 7, front: "מה ההבדל בין public לבין private?",                back: "public — נגיש מכל מקום. private — רק בתוך אותה מחלקה." },

  // ── Chapter 8 ────────────────────────────────────────────────────────────
  { id: "f35", chapter: 8, front: "מה 4 עקרונות ה-OOP?",                              back: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
  { id: "f36", chapter: 8, front: "מה ירושה (Inheritance)?",                           back: "מחלקת בן (extends) יורשת שדות ומתודות מהמחלקת אב" },
  { id: "f37", chapter: 8, front: "מה @Override?",                                     back: "מסמן שמתודה בבן מדרסת מתודה של האב. Java תוודא שהחתימה תקינה." },
  { id: "f38", chapter: 8, front: "מה זה interface?",                                  back: "חוזה שמגדיר מה class חייב לממש, ללא מימוש — רק חתימות." },
  { id: "f39", chapter: 8, front: "מה abstract class?",                                back: "מחלקה שלא ניתן ליצור ממנה instance ישירות. מגדירה בסיס לתת-מחלקות." },
];
