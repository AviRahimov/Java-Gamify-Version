const JAVA_GLOSSARY = [
  // A
  { term: "Abstract Class", category: "OOP", def: "מחלקה שלא ניתן ליצור ממנה instance. משמשת כ-blueprint. מוגדרת עם מילת המפתח abstract." },
  { term: "Array", category: "Data Structures", def: "מבנה נתונים בגודל קבוע שמאחסן פריטים מאותו type. הגישה היא לפי אינדקס שמתחיל ב-0." },
  { term: "ArrayList", category: "Data Structures", def: "רשימה דינמית (גדלה ומתכווצת) מ-java.util. גמישה יותר מ-Array, אך קצת פחות מהירה." },
  // B
  { term: "boolean", category: "Data Types", def: "סוג נתוני בסיסי (primitive) שמחזיק ערך true או false בלבד." },
  { term: "break", category: "Control Flow", def: "יוצא מ-loop או switch מיידית, גם אם התנאי עדיין מתקיים." },
  { term: "byte", category: "Data Types", def: "סוג נתוני primitive קטן: ערכים בין -128 ל-127. שימושי לחיסכון בזיכרון." },
  // C
  { term: "casting", category: "Data Types", def: "המרת סוג נתוני לאחר. Widening (int → double) הוא אוטומטי; Narrowing (double → int) דורש (type) מפורש." },
  { term: "char", category: "Data Types", def: "מחזיק תו Unicode בודד בין גרשיים בודדים, למשל 'A'. ערכו הפנימי הוא מספר (ASCII/Unicode)." },
  { term: "class", category: "OOP", def: "תבנית (blueprint) לייצור objects. מגדירה שדות (fields) ומתודות (methods)." },
  { term: "constructor", category: "OOP", def: "מתודה מיוחדת בשם המחלקה שרצה בעת יצירת object חדש עם new." },
  { term: "continue", category: "Control Flow", def: "מדלג על שאר הגוף של ה-iteration הנוכחי ועובר לאיטרציה הבאה ב-loop." },
  // D
  { term: "double", category: "Data Types", def: "מספר עשרוני בדיוק כפול (64 bit). ברירת המחדל ל-floating-point literals." },
  { term: "do-while", category: "Control Flow", def: "לולאה שמבצעת את גוף הקוד לפחות פעם אחת, ואז בודקת את התנאי." },
  // E
  { term: "else", category: "Control Flow", def: "בלוק שרץ כאשר תנאי ה-if הוא false." },
  { term: "encapsulation", category: "OOP", def: "עיקרון OOP: הסתרת מצב פנימי והחשפת גישה רק דרך מתודות public (getters/setters)." },
  { term: "extends", category: "OOP", def: "מילת מפתח ירושה. class Dog extends Animal אומר ש-Dog יורש מ-Animal." },
  // F
  { term: "final", category: "Modifiers", def: "משתנה: לא ניתן לשנות (קבוע). מחלקה: לא ניתן לרשת ממנה. מתודה: לא ניתן לדרוס אותה." },
  { term: "float", category: "Data Types", def: "מספר עשרוני בדיוק יחיד (32 bit). דורש סיומת f בלiteral, למשל 3.14f." },
  { term: "for", category: "Control Flow", def: "לולאה עם אתחול, תנאי ועדכון. for(int i=0; i<n; i++). גם for-each: for(Type x : collection)." },
  // I
  { term: "if", category: "Control Flow", def: "הצהרה מותנית: מבצעת את הבלוק רק אם התנאי הוא true." },
  { term: "implements", category: "OOP", def: "מחלקה שמיישמת interface. חייבת לספק מימוש לכל המתודות של ה-interface." },
  { term: "inheritance", category: "OOP", def: "עיקרון OOP שבו מחלקת בן יורשת שדות ומתודות מהמחלקת אב." },
  { term: "int", category: "Data Types", def: "מספר שלם (32 bit). הטיפוס הנפוץ ביותר, טווח: -2,147,483,648 עד 2,147,483,647." },
  { term: "interface", category: "OOP", def: "חוזה שמגדיר מתודות ללא מימוש. מחלקה שמ-implements interface חייבת לממש את כולן." },
  // L
  { term: "long", category: "Data Types", def: "מספר שלם גדול (64 bit). דורש סיומת L, למשל 8_000_000_000L." },
  // M
  { term: "method", category: "Core Concepts", def: "פונקציה שמוגדרת בתוך class. מבצעת פעולה ואופציונלית מחזירה ערך." },
  { term: "method overloading", category: "OOP", def: "הגדרת מספר מתודות עם אותו שם אך פרמטרים שונים באותה מחלקה." },
  { term: "method overriding", category: "OOP", def: "מחלקת בן כותבת מחדש מתודה של מחלקת אב. מסומן עם @Override." },
  // N
  { term: "new", category: "Core Concepts", def: "מילת מפתח ליצירת object חדש בזיכרון ה-heap." },
  { term: "null", category: "Core Concepts", def: "ערך מיוחד שמציין שמשתנה reference לא מצביע על אף object." },
  // O
  { term: "Object", category: "OOP", def: "מחלקת האב של כל המחלקות ב-Java. כל class יורש ממנה אוטומטית." },
  { term: "OOP", category: "OOP", def: "Object-Oriented Programming. ארבעת עקרונות: Encapsulation, Inheritance, Polymorphism, Abstraction." },
  // P
  { term: "package", category: "Core Concepts", def: "מכלול (namespace) לארגון classes. מוצהר בראש הקובץ ומאפשר import מדויק." },
  { term: "polymorphism", category: "OOP", def: "עיקרון OOP: אותה מתודה מתנהגת אחרת על סוגים שונים. מאפשר קוד גנרי גמיש." },
  { term: "private", category: "Modifiers", def: "גישה מוגבלת לאותה מחלקה בלבד. חלק מ-encapsulation." },
  { term: "protected", category: "Modifiers", def: "גישה לאותה מחלקה, תת-מחלקות, ואותו package." },
  { term: "public", category: "Modifiers", def: "גישה מכל מקום. סוג הגישה הפתוחה ביותר ב-Java." },
  // R
  { term: "return", category: "Core Concepts", def: "מחזיר ערך מה-method ומסיים את הרצתה. בפונקציית void משמש לצאת מוקדם." },
  // S
  { term: "short", category: "Data Types", def: "מספר שלם (16 bit). טווח: -32,768 עד 32,767." },
  { term: "static", category: "Modifiers", def: "שייך למחלקה עצמה ולא ל-instance. ניתן לקרוא לו ישירות עם שם המחלקה." },
  { term: "String", category: "Data Types", def: "מחרוזת תווים. הוא Object, לא primitive. השוואה נכונה עם .equals(), לא עם ==." },
  { term: "super", category: "OOP", def: "מתייחס למחלקת האב. super() קורא ל-constructor של האב; super.method() קורא למתודה של האב." },
  { term: "switch", category: "Control Flow", def: "הצהרה שבודקת ערך נגד מספר cases. יעיל יותר מ-if-else רב כאשר בודקים ערך קבוע." },
  // T
  { term: "this", category: "OOP", def: "מתייחס ל-instance הנוכחי של המחלקה. שימושי להבחנה בין שדות לפרמטרים." },
  { term: "throws / throw", category: "Error Handling", def: "throw: זורק exception. throws: מכריז בחתימת method שהיא עשויה לזרוק exception." },
  { term: "try-catch", category: "Error Handling", def: "מנגנון לטיפול בשגיאות. try מנסה; catch תופס exception; finally רץ תמיד." },
  // V
  { term: "void", category: "Core Concepts", def: "סוג ה-return של method שלא מחזירה ערך." },
  // W
  { term: "while", category: "Control Flow", def: "לולאה שרצה כל עוד התנאי הוא true. בודקת את התנאי לפני כל איטרציה." },
];

const PYTHON_GLOSSARY = [
  // A
  { term: "append()", category: "Data Structures", def: "מתודה שמוסיפה איבר חדש לסוף רשימה (List)." },
  { term: "argument", category: "Functions", def: "ערך שמועבר לפונקציה בעת הקריאה אליה." },
  // B
  { term: "break", category: "Control Flow", def: "קוטע את הלולאה הנוכחית (for או while) באופן מיידי למרות שהתנאי עדיין עשוי להתקיים." },
  // C
  { term: "class", category: "OOP", def: "תבנית המשמשת ליצירת אובייקטים, מכילה פונקציות ומשתנים (attributes)." },
  { term: "continue", category: "Control Flow", def: "מדלג על שאר האיטרציה הנוכחית בלולאה ועובר לאיטרציה הבאה." },
  // D
  { term: "def", category: "Functions", def: "מילת המפתח המשמשת להגדרת פונקציה חדשה בפייתון." },
  { term: "dictionary (dict)", category: "Data Structures", def: "מבנה נתונים שממפה מפתחות (keys) לערכים (values), מסומן ב-{}." },
  // E
  { term: "elif", category: "Control Flow", def: "קיצור של else if, בודק תנאי נוסף אם הראשון לא מתקיים." },
  // F
  { term: "for", category: "Control Flow", def: "לולאה שעוברת על איברים של רצף (כגון רשימה, מחרוזת או טווח)." },
  { term: "function", category: "Functions", def: "בלוק של קוד לשימוש חוזר אשר רץ רק כאשר קוראים לו." },
  // I
  { term: "if", category: "Control Flow", def: "הצהרת תנאי שמריצה את בלוק הקוד שלה רק אם התנאי הוא אמת." },
  { term: "import", category: "Core Concepts", def: "מילת מפתח המשמשת להכנסת מודול רשמי או קוד חיצוני לקובץ הנוכחי." },
  { term: "indentation", category: "Syntax", def: "הזחה של קוד, אשר בפייתון מגדירה את בלוקי הקוד (למשל, תוכן של לולאות או פונקציות)." },
  // L
  { term: "list", category: "Data Structures", def: "אוסף מסודר (ordered) שניתן לשנות (mutable), המסומן בסוגריים מרובעים []." },
  // P
  { term: "print()", category: "Core Concepts", def: "הפונקציה הבסיסית בפייתון המדפיסה פלט למסך." },
  // T
  { term: "tuple", category: "Data Structures", def: "אוסף מסודר (ordered) שאי אפשר לשנות (immutable), המסומן בסוגריים עגולים ()." },
  { term: "type()", category: "Core Concepts", def: "פונקציה המחזירה מהו סוג הנתונים (int, str, list וכו') של אובייקט כלשהו." },
];

import { useState } from "react";

const CATEGORY_COLORS = {
  "Core Concepts": "#60a5fa",
  "Control Flow":  "#34d399",
  "Data Structures": "#f97316",
  "Data Types":    "#fbbf24",
  "Error Handling":"#f87171",
  "Modifiers":     "#a78bfa",
  "OOP":           "#c084fc",
  "Syntax":        "#e879f9",
  "Functions":     "#2dd4bf",
};

export default function Glossary({ onClose, language = "java" }) {
  const [query,    setQuery]    = useState("");
  const [category, setCategory] = useState("הכל");

  const activeGlossary = language === "python" ? PYTHON_GLOSSARY : JAVA_GLOSSARY;
  const activeCategories = [...new Set(activeGlossary.map(g => g.category))].sort();

  const filtered = activeGlossary.filter(g => {
    const q = query.trim().toLowerCase();
    const matchText = !q || g.term.toLowerCase().includes(q) || g.def.includes(q);
    const matchCat  = category === "הכל" || g.category === category;
    return matchText && matchCat;
  });

  return (
    <div style={{
      minHeight: "100vh", background: "#020617",
      fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl"
    }}>
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 30% 0%, rgba(96,165,250,0.1) 0%, transparent 60%)"
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "24px 16px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "#94a3b8", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 14
          }}>← חזרה</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>📖</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>מילון {language === "python" ? "Python" : "Java"}</div>
            <div style={{ fontSize: 12, color: "#64748b" }}>{activeGlossary.length} מונחים</div>
          </div>
          <div style={{ width: 80 }} />
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="🔍  חפש מונח..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            width: "100%", boxSizing: "border-box",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#f0f9ff", borderRadius: 12, padding: "12px 16px",
            fontSize: 15, outline: "none", marginBottom: 12,
            fontFamily: "'Segoe UI',Arial,sans-serif", direction: "rtl"
          }}
        />

        {/* Category filter */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          {["הכל", ...activeCategories].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                background: category === cat ? "rgba(99,102,241,0.25)" : "rgba(255,255,255,0.05)",
                border: category === cat ? "1px solid #6366f1" : "1px solid rgba(255,255,255,0.1)",
                color: category === cat ? "#a5b4fc" : "#94a3b8",
                borderRadius: 99, padding: "6px 14px", fontSize: 12,
                cursor: "pointer", fontFamily: "inherit"
              }}
            >{cat}</button>
          ))}
        </div>

        {/* Terms */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", color: "#475569", padding: 40 }}>
            😅 לא נמצאו תוצאות
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map(g => (
              <div key={g.term} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: "16px 18px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono','Fira Code','Courier New',monospace",
                    fontSize: 15, fontWeight: 700, color: "#93c5fd", direction: "ltr"
                  }}>{g.term}</span>
                  <span style={{
                    fontSize: 11, padding: "3px 10px", borderRadius: 99,
                    background: `${CATEGORY_COLORS[g.category] || "#6366f1"}22`,
                    color: CATEGORY_COLORS[g.category] || "#a5b4fc"
                  }}>{g.category}</span>
                </div>
                <div style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.65 }}>{g.def}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 32, color: "#1e293b", fontSize: 13 }}>
          {language === "python" ? "Python" : "Java"} Quest • Built with ☕ and ❤️
        </div>
      </div>
    </div>
  );
}
