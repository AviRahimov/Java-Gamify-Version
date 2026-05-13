export const CHAPTERS = [
  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 1 – מה זה Java?
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1, emoji: "☕", title: "מה זה Java?", subtitle: "ברוך הבא, לוחם הקוד!",
    xpReward: 100, difficulty: "קל",
    meme: {
      text: "כשאתה כותב את ה-Hello World הראשון שלך",
      reaction: "😭✨ דמעות של גאווה"
    },
    lessons: [
      {
        id: "1a", title: "Java – הקדמה",
        content: `Java היא שפת תכנות עוצמתית שרצה על כל מחשב בעולם! ☕\n\nהמשפט המפורסם של Java הוא:\n"Write Once, Run Anywhere"\n\nכלומר – כותבים קוד פעם אחת, ומריצים אותו בכל מקום!\n\nלמה Java? 🤔\n• שפה מאוד פופולרית בתעשייה\n• בסיס מצוין ל-Android\n• Object-Oriented – מבוסס עצמים\n• בטוח ואמין`,
        code: `// Our first program!
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Quest! ☕");
    }
}`,
        funFact: "☕ Java נקראת כך על שם קפה Java – האי שממנו הגיע הקפה האהוב של המפתחים!"
      },
      {
        id: "1b", title: "מבנה תוכנית Java",
        content: `כל תוכנית Java מתחילה מ-class ומ-main method.\n\nחשבו על זה כך:\n🏰 Class = הטירה שלכם\n⚔️ main  = השער הראשי\n📜 Code  = הפקודות שבפנים\n\nכל שורה מסתיימת ב- ; (נקודה-פסיק)\nזו ה"נשימה" של Java – בלעדיה היא נחנקת! 😅`,
        code: `public class MyFirstProgram {
    // This is the main method - entry point of every Java program
    public static void main(String[] args) {

        // Single-line comment - Java ignores it
        System.out.println("Java is awesome! 🚀");

        /* Multi-line comment
         * works great for longer explanations! */

        // print without newline
        System.out.print("Hello ");
        System.out.print("World");
        System.out.println("!"); // adds newline at the end
    }
}`,
        funFact: "💡 System.out.println מדפיס שורה ועובר לשורה חדשה. System.out.print מדפיס בלי ירידת שורה."
      },
      {
        id: "1c", title: "משתנים ב-Java – מבוא",
        content: `משתנה = קופסה שמאחסנת ערך.\n\nכדי ליצור משתנה ב-Java צריך:\n1️⃣ לציין את הסוג (type)\n2️⃣ לתת לו שם\n3️⃣ (אופציונלי) לתת לו ערך\n\nחוקי שמות:\n✅ מתחיל באות קטנה (camelCase)\n✅ אותיות, ספרות, _ ו-$\n❌ לא יכול להתחיל בספרה\n❌ לא מילה שמורה כמו int, class וכו'`,
        code: `public class Variables {
    public static void main(String[] args) {

        int age = 17;           // whole number
        String name = "David";  // text
        boolean isStudent = true;

        // Print with concatenation
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Is student? " + isStudent);

        // Change the value later
        age = 18;
        System.out.println("New age: " + age);
    }
}`,
        funFact: "📦 המילה 'variable' מגיעה מלטינית ומשמעותה 'משהו שמשתנה'. בדיוק כמו בחיים – ערכים משתנים!"
      }
    ],
    quiz: [
      {
        q: "מה הפלט של:\nSystem.out.println(\"Hello\");",
        options: ["Hello", "hello", "\"Hello\"", "שגיאה"],
        answer: 0,
        explanation: "println מדפיס את הטקסט בלי גרשיים",
        hints: ["println = print line – מדפיסה מה שבתוך הסוגריים", "הגרשיים בקוד הם חלק מהsyntax, לא מהפלט", "מה כתוב בתוך הגרשיים?"]
      },
      {
        q: "מה מסיים כל שורה (statement) ב-Java?",
        options: [":", ".", ";", ","],
        answer: 2,
        explanation: "נקודה-פסיק ; מסיימת כל statement ב-Java",
        hints: ["חשבו על תו שמשמש בסוף משפטים", "בלי התו הזה Java תציג שגיאת compile", "זה שילוב של נקודה ופסיק..."]
      },
      {
        q: "מה זה 'Write Once, Run Anywhere'?",
        options: [
          "כותבים קוד פעם אחת ומריצים בכל מקום",
          "כותבים Java בכל מקום",
          "מריצים Java פעם אחת בלבד",
          "כל התשובות נכונות"
        ],
        answer: 0,
        explanation: "זו הפילוסופיה של Java – קוד אחד עובד על כל מערכת הפעלה",
        hints: ["WORA – ראשי תיבות של המשפט", "Java קומפילה לbytecode שרץ בכל מקום", "'Write Once' = כותבים פעם אחת..."]
      },
      {
        q: "איזה מהשמות הבאים חוקי למשתנה ב-Java?",
        options: ["1myVar", "my-var", "myVar", "class"],
        answer: 2,
        explanation: "myVar חוקי: מתחיל באות קטנה, ללא תווים מיוחדים, ואינו מילה שמורה",
        hints: ["שם משתנה לא יכול להתחיל בספרה", "מקפים (-) לא מותרים בשמות משתנים", "מילות מפתח כמו class הן מילים שמורות"]
      },
      {
        q: "מה ההבדל בין System.out.print ל-System.out.println?",
        options: [
          "אין הבדל",
          "println מוסיף ירידת שורה בסוף",
          "print מהיר יותר",
          "println מדפיס מספרים בלבד"
        ],
        answer: 1,
        explanation: "println (print line) מוסיף '\\n' בסוף אוטומטית; print לא מוסיף",
        hints: ["שימו לב לסיומת 'ln' ב-println", "ln = line – רמז לירידת שורה", "מה קורה אחרי שprintln מדפיס?"]
      },
      {
        type: "bug",
        q: "מה הבאג בקוד הזה?\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\")\n    }\n}",
        options: [
          "חסר ; אחרי println",
          "חסר return בסוף main",
          "הטקסט צריך להיות בגרשיים בודדות",
          "אין באג"
        ],
        answer: 0,
        explanation: "כל statement ב-Java חייב להסתיים ב-; נקודה-פסיק. חסר אחרי println(\"Hello World\")"
      },
      {
        type: "bug",
        q: "מה הבאג בקוד הזה?\nint 2count = 0;\nSystem.out.println(2count);",
        options: [
          "int לא יכול להיות 0",
          "שם משתנה לא יכול להתחיל בספרה",
          "חסר ; בשורה השנייה",
          "אין באג"
        ],
        answer: 1,
        explanation: "שמות משתנים ב-Java לא יכולים להתחיל בספרה. count2 תקין, אבל 2count לא."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 2 – סוגי נתונים
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2, emoji: "🔢", title: "סוגי נתונים", subtitle: "הלבנים של הקוד",
    xpReward: 150, difficulty: "קל",
    meme: {
      text: "כשאתה מנסה לשמור מספר שלם ב-String",
      reaction: "💀 Java לא מרשה כזה דבר"
    },
    lessons: [
      {
        id: "2a", title: "Primitive Data Types",
        content: `ב-Java יש 8 סוגי נתונים בסיסיים (Primitives):\n\n🔢 int     – מספר שלם (-2,147,483,648 עד 2,147,483,647)\n📏 long    – מספר שלם גדול מאוד (+ מסתיים ב-L)\n💧 double  – מספר עשרוני מדויק\n🪶 float   – מספר עשרוני (פחות מדויק, + מסתיים ב-f)\n✅ boolean – true / false בלבד\n📝 char    – תו אחד בין גרשיים בודדים ''\n🐜 byte    – מספר קטן (-128 עד 127)\n📐 short   – מספר בינוני (-32,768 עד 32,767)`,
        code: `public class DataTypes {
    public static void main(String[] args) {

        int age          = 25;
        long population  = 8_000_000_000L; // L = long literal
        double price     = 9.99;
        float temp       = 36.6f;           // f = float literal
        boolean isJavaFun = true;
        char grade       = 'A';             // single quotes!
        byte level       = 5;
        short year       = 2024;

        System.out.println("Age: "        + age);
        System.out.println("Population: " + population);
        System.out.println("Price: $"     + price);
        System.out.println("Is Java fun? "+ isJavaFun);
        System.out.println("Grade: "      + grade);
    }
}`,
        funFact: "🧠 boolean נקרא על שם ג'ורג' בול – מתמטיקאי מ-1815. הוא המציא את האלגברה הבינארית. true/false מניעים את כל המחשבים בעולם!"
      },
      {
        id: "2b", title: "String – מחרוזות",
        content: `String הוא לא Primitive – הוא Object!\n\nString = שרשרת תווים:\n"Hello" = 'H' + 'e' + 'l' + 'l' + 'o'\n\nחיבור מחרוזות (Concatenation) עם +\n\nמתודות שימושיות:\n• length()      – מספר התווים\n• toUpperCase() – כל האותיות גדולות\n• toLowerCase() – כל האותיות קטנות\n• charAt(i)     – תו בindex i\n• contains(s)   – האם מכיל מחרוזת s?\n• substring(a,b)– חלק מהמחרוזת`,
        code: `public class StringDemo {
    public static void main(String[] args) {

        String name     = "Java";
        String language = "Programming Language";

        // Concatenation
        String full = name + " " + language;
        System.out.println(full);          // Java Programming Language

        // Mixing String + number
        int year = 1995;
        System.out.println("Java was born in: " + year);

        // Useful methods
        System.out.println(name.length());        // 4
        System.out.println(name.toUpperCase());   // JAVA
        System.out.println(name.toLowerCase());   // java
        System.out.println(name.charAt(0));       // J
        System.out.println(name.contains("av")); // true

        // Compare strings - always use .equals(), NOT ==
        String a = "hello";
        String b = "hello";
        System.out.println(a.equals(b));          // true
    }
}`,
        funFact: "🔤 Java נוצרה ב-1995 על ידי James Gosling. שמה המקורי היה Oak – אבל כבר היה עם אותו שם, אז שינו ל-Java על שם הקפה!"
      },
      {
        id: "2c", title: "Type Casting – המרת סוגים",
        content: `לפעמים צריך להמיר בין סוגי נתונים:\n\n📥 Widening (אוטומטי) – קטן → גדול\nbyte → short → int → long → float → double\n\n📤 Narrowing (ידני) – גדול → קטן\nחייבים לכתוב את הסוג ב-() לפני הערך\n\n⚠️ אפשר לאבד מידע ב-Narrowing!`,
        code: `public class TypeCasting {
    public static void main(String[] args) {

        // Widening - automatic, no data loss
        int myInt    = 100;
        double myDbl = myInt;    // int → double, auto
        System.out.println(myDbl); // 100.0

        // Narrowing - manual, may lose data
        double pi    = 3.14159;
        int   piInt  = (int) pi;  // cut the decimal part
        System.out.println(piInt); // 3 (not 4! just truncated)

        // char ↔ int
        char c   = 'A';
        int  num = c;
        System.out.println(num); // 65 (ASCII code of 'A')

        char back = (char)(num + 1);
        System.out.println(back); // B
    }
}`,
        funFact: "🔢 כל תו ('A','B',..) שמור כמספר (ASCII). 'A'=65, 'a'=97. לכן char + 1 נותן תו אחד אחרי!"
      }
    ],
    quiz: [
      {
        q: "איזה type מתאים לשמור true/false?",
        options: ["int", "String", "boolean", "char"],
        answer: 2,
        explanation: "boolean מחזיק רק שני ערכים: true או false"
      },
      {
        q: "מה הפלט של:\nSystem.out.println(3 + 4 + \"Java\");",
        options: ["34Java", "7Java", "Java34", "שגיאה"],
        answer: 1,
        explanation: "Java מחשבת משמאל לימין: 3+4=7, ואז 7+\"Java\"=\"7Java\""
      },
      {
        q: "איזה type מתאים למחיר כמו 19.99?",
        options: ["int", "double", "boolean", "char"],
        answer: 1,
        explanation: "double מתאים למספרים עשרוניים"
      },
      {
        q: "מה הפלט של:\nSystem.out.println(\"Hello\".length());",
        options: ["4", "5", "6", "שגיאה"],
        answer: 1,
        explanation: "Hello = 5 תווים: H-e-l-l-o"
      },
      {
        q: "מה ההבדל בין == לבין .equals() עבור Strings?",
        options: [
          "אין הבדל",
          "== משווה תוכן, .equals() משווה כתובת זיכרון",
          ".equals() משווה תוכן, == משווה כתובת זיכרון",
          "== מהיר יותר תמיד"
        ],
        answer: 2,
        explanation: "עבור Strings, תמיד השתמשו ב-.equals() להשוואת תוכן. == בודק אם שניהם אותו אובייקט בזיכרון"
      },
      {
        q: "מה הפלט של:\ndouble d = 9.7;\nint i = (int) d;\nSystem.out.println(i);",
        options: ["9", "10", "9.7", "שגיאה"],
        answer: 0,
        explanation: "Type casting לא מעגל! הוא חותך את החלק העשרוני. 9.7 הופך ל-9"
      },
      {
        type: "bug",
        q: "מה הבאג בקוד הזה?\nString a = \"hello\";\nif (a == \"hello\") {\n    System.out.println(\"match!\");\n}",
        options: [
          "String לא יכול להיות בגרשיים מסולסלים",
          "משווים String עם == במקום .equals()",
          "חסר else",
          "אין באג"
        ],
        answer: 1,
        explanation: "Strings חייבים להיות מושווים עם .equals() ולא עם ==. הנכון: a.equals(\"hello\")"
      },
      {
        type: "bug",
        q: "מה הבאג בקוד הזה?\nint x = 3.14;",
        options: [
          "3.14 גדול מדי עבור int",
          "int לא יכול לשמור מספר עשרוני ללא casting",
          "חסר f אחרי 3.14",
          "אין באג"
        ],
        answer: 1,
        explanation: "int מחזיק רק מספרים שלמים. 3.14 הוא double. נכון: double x = 3.14 או int x = (int) 3.14"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 3 – תנאים
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3, emoji: "🔀", title: "תנאים", subtitle: "Java מחליטה בשבילך",
    xpReward: 200, difficulty: "קל-בינוני",
    meme: {
      text: "כשאתה כותב if בלי else ומקבל NullPointerException",
      reaction: "🤡 Classic mistake"
    },
    lessons: [
      {
        id: "3a", title: "if / else if / else",
        content: `if-else זה כמו הכרעות בחיים:\n\n🌧️ "אם יורד גשם → קח מטריה, אחרת → לבש חולצה"\n\nמבנה:\nif (תנאי) {\n  // אם נכון\n} else if (תנאי2) {\n  // אם תנאי2 נכון\n} else {\n  // שום דבר לא נכון\n}\n\nאופרטורי השוואה:\n==  שווה\n!=  לא שווה\n>   גדול\n<   קטן\n>=  גדול או שווה\n<=  קטן או שווה\n\nאופרטורים לוגיים:\n&&  AND (גם וגם)\n||  OR  (אחד מהם)\n!   NOT (הפוך)`,
        code: `public class Grades {
    public static void main(String[] args) {

        int score = 85;

        if (score >= 90) {
            System.out.println("🏆 Excellent!");
        } else if (score >= 80) {
            System.out.println("🥈 Very Good!");
        } else if (score >= 70) {
            System.out.println("👍 Good");
        } else if (score >= 60) {
            System.out.println("😅 Pass");
        } else {
            System.out.println("💪 Try again!");
        }
        // Output: 🥈 Very Good!

        // Logical operators
        int age = 20;
        boolean hasID = true;

        if (age >= 18 && hasID) {
            System.out.println("✅ Entry allowed");
        } else {
            System.out.println("❌ Entry denied");
        }
    }
}`,
        funFact: "🎮 כל המשחקים בעולם מבוססים על if-else! 'אם לחץ A → קפיצה', 'אם HP = 0 → Game Over'. בלי if-else אין משחקים!"
      },
      {
        id: "3b", title: "switch statement",
        content: `switch זה כמו תפריט מסעדה:\nאתה בוחר אפשרות → מקבל את המנה המתאימה!\n\nמתי להשתמש ב-switch?\n✅ כשיש הרבה אפשרויות קבועות\n✅ כשמשווים ערך אחד לערכים רבים\n❌ לא מתאים לטווחים (score > 80 וכו')\n\n⚠️ אל תשכח break! בלי break, Java ממשיכה לcaseדהבא.`,
        code: `public class WeekDay {
    public static void main(String[] args) {

        int day = 3;
        String dayName;

        switch (day) {
            case 1: dayName = "Sunday";    break;
            case 2: dayName = "Monday";    break;
            case 3: dayName = "Tuesday";   break;
            case 4: dayName = "Wednesday"; break;
            case 5: dayName = "Thursday";  break;
            case 6: dayName = "Friday 🎉"; break;
            default: dayName = "Saturday 😴";
        }
        System.out.println("Today: " + dayName); // Today: Tuesday

        // Switch on String (Java 7+)
        String season = "summer";
        switch (season) {
            case "winter": System.out.println("❄️ Cold!"); break;
            case "spring": System.out.println("🌸 Bloom!"); break;
            case "summer": System.out.println("☀️ Hot!");  break;
            case "autumn": System.out.println("🍂 Fall!"); break;
            default:       System.out.println("Unknown season");
        }
    }
}`,
        funFact: "🔀 ב-Java 14 הוסיפו Switch Expressions – כתיבה חדשה ויפה יותר! אבל קודם חייבים ללמוד את הבסיס 😄"
      },
      {
        id: "3c", title: "Ternary Operator – קיצור if-else",
        content: `ה-Ternary Operator הוא קיצור של if-else בשורה אחת.\n\nתחביר:\ntype var = (תנאי) ? ערך_אם_נכון : ערך_אם_לא_נכון;\n\nמתאים:\n✅ לביטויים פשוטים\n✅ כשרוצים להציב ערך\n❌ לא מתאים לבלוקי קוד מורכבים`,
        code: `public class TernaryDemo {
    public static void main(String[] args) {

        int age = 20;

        // Long way
        String status;
        if (age >= 18) {
            status = "Adult";
        } else {
            status = "Minor";
        }
        System.out.println(status); // Adult

        // Short way - ternary
        String status2 = (age >= 18) ? "Adult" : "Minor";
        System.out.println(status2); // Adult

        // More examples
        int a = 7, b = 3;
        int max = (a > b) ? a : b;
        System.out.println("Max: " + max); // 7

        boolean isEven = (a % 2 == 0);
        System.out.println(a + " is " + (isEven ? "even" : "odd")); // odd
    }
}`,
        funFact: "💡 ה-Ternary Operator קיים ברוב שפות התכנות. ב-Python כותבים: value_if_true if condition else value_if_false. טיפה שונה אבל אותה רעיון!"
      }
    ],
    quiz: [
      {
        q: "מה הפלט אם score = 75?\nif (score > 80) System.out.print(\"A\");\nelse System.out.print(\"B\");",
        options: ["A", "B", "AB", "שגיאה"],
        answer: 1,
        explanation: "75 לא גדול מ-80, אז הולכים ל-else ומדפיסים B"
      },
      {
        q: "מה האופרטור לבדיקת שוויון בין שני int?",
        options: ["=", "==", "===", ".equals()"],
        answer: 1,
        explanation: "== בודק שוויון בין primitives. = מציב ערך (לא השוואה!)"
      },
      {
        q: "מה קורה ב-switch בלי break?",
        options: ["שגיאה compile", "עוצר אוטומטית", "ממשיך לcase הבא (fall-through)", "חוזר להתחלה"],
        answer: 2,
        explanation: "Fall-through: בלי break, Java ממשיכה לcase הבא בכל מקרה"
      },
      {
        q: "מה הפלט של:\nint x = 5;\nString r = (x > 3) ? \"big\" : \"small\";\nSystem.out.println(r);",
        options: ["big", "small", "5", "שגיאה"],
        answer: 0,
        explanation: "5 > 3 הוא true, אז x מקבל \"big\""
      },
      {
        q: "אם age=15, isParent=false, מה מדפיס:\nif (age>=18 || isParent) System.out.print(\"OK\");\nelse System.out.print(\"NO\");",
        options: ["OK", "NO", "OKNO", "שגיאה"],
        answer: 1,
        explanation: "15 < 18 ו-isParent=false. שניהם false → || מחזיר false → else"
      },
      {
        q: "מתי עדיף להשתמש ב-switch על פני if-else if?",
        options: [
          "כשמשווים ל-טווחים כמו score >= 90",
          "כשמשווים ערך אחד לאפשרויות קבועות ספציפיות",
          "switch מהיר יותר תמיד",
          "switch מתאים רק למספרים"
        ],
        answer: 1,
        explanation: "switch מתאים כשמשווים ערך אחד לרשימה של ערכים ספציפיים (case). לא לטווחים!"
      },
      {
        type: "bug",
        q: "מה הבאג בקוד הזה?\nint score = 90;\nif (score = 100) {\n    System.out.println(\"Perfect!\");\n}",
        options: [
          "חסר else",
          "= במקום == בתנאי",
          "println לא קיים",
          "אין באג"
        ],
        answer: 1,
        explanation: "בתנאי if צריך == להשוואה, לא = להצבה. if (score == 100) הוא הנכון"
      },
      {
        type: "bug",
        q: "מה הבאג בקוד הזה?\nint x = 5;\nif (x > 3) {\n    System.out.println(\"big\");\nelse {\n    System.out.println(\"small\");\n}",
        options: [
          "חסר } לסגירת if לפני else",
          "x לא ניתן לאתחול כ-5",
          "חסר ; אחרי else",
          "אין באג"
        ],
        answer: 0,
        explanation: "חסר } לסגירת הבלוק של if לפני else. כל בלוק {} חייב להיסגר לפני פתיחת הבא."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 4 – לולאות
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4, emoji: "🔄", title: "לולאות", subtitle: "החזרתיות היא כוח",
    xpReward: 250, difficulty: "בינוני",
    meme: {
      text: "כשהלולאה שלך רצה ואתה לא יודע איך לעצור אותה",
      reaction: "😱 while(true) { // infinite loop }"
    },
    lessons: [
      {
        id: "4a", title: "for loop",
        content: `for loop – הלולאה הכי נפוצה!\n\nמבנה:\nfor (אתחול; תנאי; שינוי) {\n  // קוד שחוזר\n}\n\nשלושת החלקים:\n1️⃣ int i = 0  – מתחילים מ-0\n2️⃣ i < 10     – רצים כל עוד i קטן מ-10\n3️⃣ i++        – מוסיפים 1 בכל סיבוב\n\ni++ = i = i + 1\ni-- = i = i - 1\ni += 5 = i = i + 5`,
        code: `public class ForLoops {
    public static void main(String[] args) {

        // Count 1 to 5
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }

        // Countdown
        System.out.println("\\nCountdown:");
        for (int i = 5; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println("🚀 Blast off!");

        // Skip by 2 (even numbers)
        System.out.println("\\nEven numbers:");
        for (int i = 2; i <= 10; i += 2) {
            System.out.print(i + " "); // 2 4 6 8 10
        }

        // Sum 1 to 100
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("\\nSum 1-100 = " + sum); // 5050
    }
}`,
        funFact: "🔢 הסכום 1+2+...+100 = 5050! גאוס המתמטיקאי חישב זאת בגיל 10 בראש. for loop מחשב אותו ב-millisecond!"
      },
      {
        id: "4b", title: "while & do-while",
        content: `while – רצים כל עוד התנאי נכון:\n\nמתי להשתמש?\n• כשלא יודעים כמה פעמים לחזור\n• כשמחכים לקלט מהמשתמש\n• כשקוראים נתונים עד סוף קובץ\n\n⚠️ אם התנאי תמיד נכון → INFINITE LOOP!\n\ndo-while – מבצע לפחות פעם אחת:\ndo { קוד } while (תנאי);\n\n🔑 break  – יוצא מהלולאה מיד\n🔑 continue – מדלג לאיטרציה הבאה`,
        code: `public class WhileDemo {
    public static void main(String[] args) {

        // while loop
        int lives = 3;
        while (lives > 0) {
            System.out.println("❤️ Lives: " + lives);
            lives--;
        }
        System.out.println("💀 Game Over!");

        // do-while - runs at least once
        int count = 10;
        do {
            System.out.println("Ran once even though count=" + count);
            count++;
        } while (count < 5);

        // break and continue
        System.out.println("\\nSkip 5, stop at 8:");
        for (int i = 1; i <= 10; i++) {
            if (i == 5) continue;  // skip 5
            if (i == 8) break;     // stop at 8
            System.out.print(i + " "); // 1 2 3 4 6 7
        }
    }
}`,
        funFact: "😱 ה-infinite loop המפורסם: while(true){} – משמש ב-servers ו-games שצריכים לרוץ לנצח! כל server באינטרנט רץ בלולאה אינסופית."
      },
      {
        id: "4c", title: "for-each & לולאות מקוננות",
        content: `for-each – לולאה חכמה לאוספים:\n\nמבנה:\nfor (type item : collection) {\n  // עשה משהו עם item\n}\n\n✅ קצרה ונקייה\n✅ אין סכנת out-of-bounds\n❌ לא מאפשרת לשנות את ה-index\n\nלולאות מקוננות (Nested) – לולאה בתוך לולאה:\nמשמשות ל-מטריצות, טבלאות, patterns!`,
        code: `public class ForEachNested {
    public static void main(String[] args) {

        // for-each over array
        String[] heroes = {"Java", "Python", "C++", "JavaScript"};
        for (String hero : heroes) {
            System.out.println("🦸 " + hero);
        }

        // Nested loops - multiplication table
        System.out.println("\\nMultiplication table 1-5:");
        for (int row = 1; row <= 5; row++) {
            for (int col = 1; col <= 5; col++) {
                System.out.printf("%4d", row * col);
            }
            System.out.println(); // new row
        }

        // Stars pattern
        System.out.println("\\nStars:");
        for (int i = 1; i <= 5; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("⭐");
            }
            System.out.println();
        }
    }
}`,
        funFact: "🎯 for-each נוסף ל-Java בגרסה 5 (2004). לפני כן כולם כתבו for רגיל עם index. המפתחים חגגו כשזה יצא!"
      }
    ],
    quiz: [
      {
        q: "כמה פעמים רץ:\nfor (int i = 0; i < 5; i++)",
        options: ["4", "5", "6", "אינסוף"],
        answer: 1,
        explanation: "i = 0,1,2,3,4 → 5 פעמים. i<5 לא כולל את 5 עצמו"
      },
      {
        q: "מה ההבדל בין while לבין do-while?",
        options: [
          "אין הבדל",
          "do-while רץ לפחות פעם אחת",
          "while רץ לפחות פעם אחת",
          "do-while מהיר יותר"
        ],
        answer: 1,
        explanation: "do-while תמיד מבצע את הגוף לפחות פעם אחת, ואז בודק את התנאי"
      },
      {
        q: "מה עושה break בתוך לולאה?",
        options: [
          "מדלג לאיטרציה הבאה",
          "יוצא מהלולאה לגמרי",
          "מאפס את i ל-0",
          "עוצר את כל התוכנית"
        ],
        answer: 1,
        explanation: "break יוצא מהלולאה הנוכחית לגמרי. continue מדלג לאיטרציה הבאה"
      },
      {
        q: "כמה פעמים מדפיס:\nfor (int i=1; i<=3; i++)\n  for (int j=1; j<=3; j++)\n    System.out.print(\"*\");",
        options: ["3", "6", "9", "12"],
        answer: 2,
        explanation: "3 (חיצונית) × 3 (פנימית) = 9 פעמים"
      },
      {
        q: "מה הפלט של:\nfor (int i=1; i<=5; i++) {\n  if (i==3) continue;\n  System.out.print(i+\" \");\n}",
        options: ["1 2 3 4 5", "1 2 4 5", "3", "1 2"],
        answer: 1,
        explanation: "continue מדלג על 3 אבל ממשיך לשאר: 1 2 4 5"
      },
      {
        type: "bug",
        q: "מה הבאג בקוד הזה?\nfor (int i = 0, i < 5, i++) {\n    System.out.println(i);\n}",
        options: [
          "i צריך להתחיל מ-1",
          "פסיקים , במקום נקודה-פסיק ; ב-for",
          "חסר {} סביב גוף הלולאה",
          "אין באג"
        ],
        answer: 1,
        explanation: "ב-for loop, שלושת החלקים מופרדים ב-; נקודה-פסיק, לא בפסיק. הנכון: for (int i = 0; i < 5; i++)"
      },
      {
        type: "bug",
        q: "מה הבאג בקוד הזה?\nint i = 0;\nwhile (i < 5) {\n    System.out.println(i);\n}",
        options: [
          "i צריך להתחיל מ-1",
          "חסר i++ בגוף הלולאה – תוצאה: לולאה אינסופית",
          "System.out.println לא עובד בתוך while",
          "אין באג"
        ],
        answer: 1,
        explanation: "חסר i++ אז i אף פעם לא מגיע ל-5. הלולאה תרוץ לנצח (infinite loop)!"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 5 – מערכים ורשימות
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5, emoji: "📦", title: "מערכים ורשימות", subtitle: "לארגן את הכאוס",
    xpReward: 300, difficulty: "בינוני",
    meme: {
      text: "כשאתה מנסה לגשת ל-array[10] במערך בגודל 10",
      reaction: "💥 ArrayIndexOutOfBoundsException – Java נפצעת"
    },
    lessons: [
      {
        id: "5a", title: "Arrays – מערכים",
        content: `Array = שורת תאים ממוספרים\n\n📦📦📦📦📦\n[0][1][2][3][4] ← index (מתחיל מ-0!)\n\n⚠️ חוקים חשובים:\n• Index מתחיל מ-0\n• גודל קבוע לאחר יצירה\n• כל האיברים מאותו type\n• index אחרון = length - 1\n\nיצירה:\ntype[] name = new type[size];\ntype[] name = {val1, val2, val3};`,
        code: `public class ArraysDemo {
    public static void main(String[] args) {

        // Create and fill
        int[] scores = new int[5];
        scores[0] = 95;
        scores[1] = 87;
        scores[2] = 92;
        scores[3] = 78;
        scores[4] = 100;

        // Create with initializer
        String[] days = {"Sun","Mon","Tue","Wed","Thu","Fri","Sat"};

        System.out.println("First day: "  + days[0]);   // Sun
        System.out.println("Last day: "   + days[6]);   // Sat
        System.out.println("Days count: " + days.length); // 7

        // Loop through scores
        int total = 0;
        for (int score : scores) {
            total += score;
        }
        double avg = (double) total / scores.length;
        System.out.printf("Average: %.2f%n", avg); // Average: 90.40

        // 2D array - like a table
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("Center: " + matrix[1][1]); // 5
    }
}`,
        funFact: "📊 מערכים הם הבסיס של כל מבני הנתונים! Binary Search, Sorting, Graphs – הכל מתחיל ממערך פשוט."
      },
      {
        id: "5b", title: "ArrayList – רשימה דינמית",
        content: `ArrayList = Array שגדל ומתכווץ לפי הצורך!\n\nבניגוד ל-Array:\n✅ גודל משתנה – אפשר להוסיף ולמחוק\n✅ שיטות נוחות: add, remove, contains, size\n✅ עובד עם Objects\n❌ מעט איטי יותר מ-array רגיל\n\nחייבים לייבא:\nimport java.util.ArrayList;\n\nסינטקס:\nArrayList<Type> name = new ArrayList<>();`,
        code: `import java.util.ArrayList;
import java.util.Collections;

public class ArrayListDemo {
    public static void main(String[] args) {

        ArrayList<String> heroes = new ArrayList<>();

        // Add elements
        heroes.add("Spider-Man");
        heroes.add("Iron Man");
        heroes.add("Thor");
        heroes.add("Black Widow");

        System.out.println(heroes);         // [Spider-Man, Iron Man, Thor, Black Widow]
        System.out.println("Size: " + heroes.size()); // 4

        // Access by index
        System.out.println(heroes.get(0));  // Spider-Man

        // Check existence
        System.out.println(heroes.contains("Thor")); // true

        // Remove by value
        heroes.remove("Iron Man");
        System.out.println(heroes);         // [Spider-Man, Thor, Black Widow]

        // Sort alphabetically
        Collections.sort(heroes);
        System.out.println(heroes);         // [Black Widow, Spider-Man, Thor]

        // Loop
        for (String h : heroes) {
            System.out.println("🦸 " + h);
        }
    }
}`,
        funFact: "🔧 ArrayList משתמשת בתוכה ב-Array רגיל! כשהיא מתמלאת, היא יוצרת array חדש בגודל כפול ומעתיקה הכל. מאחורי הקלעים..."
      },
      {
        id: "5c", title: "Arrays מתקדם – חיפוש ומיון",
        content: `Java מספקת כלים מובנים לעבודה עם מערכים:\n\nimport java.util.Arrays;\n\n• Arrays.sort(arr)       – ממיין\n• Arrays.binarySearch() – חיפוש בינארי (לאחר מיון!)\n• Arrays.copyOf()       – העתקה\n• Arrays.fill()         – מלא ערך\n• Arrays.toString()     – המרה לString\n\nLinear Search – חיפוש לינארי: O(n)\nBinary Search – חיפוש בינארי:  O(log n)`,
        code: `import java.util.Arrays;

public class ArraySearch {
    public static void main(String[] args) {

        int[] nums = {5, 2, 8, 1, 9, 3, 7};

        // Sort
        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums)); // [1, 2, 3, 5, 7, 8, 9]

        // Binary search (after sort!)
        int idx = Arrays.binarySearch(nums, 7);
        System.out.println("7 is at index: " + idx); // 4

        // Fill
        int[] zeros = new int[5];
        Arrays.fill(zeros, 42);
        System.out.println(Arrays.toString(zeros)); // [42, 42, 42, 42, 42]

        // Copy
        int[] copy = Arrays.copyOf(nums, 4);
        System.out.println(Arrays.toString(copy)); // [1, 2, 3, 5]

        // Manual linear search
        String[] names = {"Alice", "Bob", "Charlie", "Diana"};
        String target = "Charlie";
        for (int i = 0; i < names.length; i++) {
            if (names[i].equals(target)) {
                System.out.println(target + " found at " + i);
                break;
            }
        }
    }
}`,
        funFact: "⚡ Binary Search היא כוח על! בחיפוש בינארי ב-1,000,000 איברים – לוקח לכל היותר 20 השוואות (log₂(1M)≈20). Linear יכול לקחת 1,000,000!"
      }
    ],
    quiz: [
      {
        q: "מה ה-index של האיבר הראשון במערך?",
        options: ["1", "0", "-1", "תלוי בגודל"],
        answer: 1,
        explanation: "תמיד מתחילים מ-0! זו מוסכמה בכל שפות התכנות"
      },
      {
        q: "מה ההבדל העיקרי בין Array ל-ArrayList?",
        options: [
          "Array מהיר יותר תמיד",
          "ArrayList בגודל קבוע",
          "ArrayList גדל דינמית",
          "אין הבדל"
        ],
        answer: 2,
        explanation: "ArrayList יכול לגדול ולקטון, בניגוד ל-Array שגודלו קבוע לאחר יצירה"
      },
      {
        q: "מה מדפיס:\nint[] arr = {10, 20, 30};\nSystem.out.println(arr[1]);",
        options: ["10", "20", "30", "ArrayIndexOutOfBoundsException"],
        answer: 1,
        explanation: "arr[1] = האיבר השני = 20 (index מתחיל מ-0)"
      },
      {
        q: "מה גודל המערך:\nint[] x = new int[7];",
        options: ["6", "7", "8", "תלוי"],
        answer: 1,
        explanation: "new int[7] יוצר מערך עם 7 תאים (index 0 עד 6)"
      },
      {
        q: "מה השיטה להוסיף איבר ל-ArrayList?",
        options: [".push()", ".add()", ".insert()", ".append()"],
        answer: 1,
        explanation: "ArrayList משתמשת ב-.add() להוספת איברים"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 6 – פונקציות (Methods)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6, emoji: "⚙️", title: "פונקציות", subtitle: "DRY – Don't Repeat Yourself",
    xpReward: 350, difficulty: "בינוני",
    meme: {
      text: "כשאתה מעתיק אותו קוד 10 פעמים במקום לכתוב פונקציה",
      reaction: "😤 מפתחים בכל מקום בוכים"
    },
    lessons: [
      {
        id: "6a", title: "מה זה Method?",
        content: `Method (פונקציה) = בלוק קוד בעל שם.\n\nכמו מכונת קפה:\n☕ מכניסים פולי קפה (parameters)\n⚙️ המכונה מעבדת (קוד)\n☕ מקבלים קפה (return value)\n\nמבנה:\nreturnType methodName(param1, param2) {\n  // קוד\n  return value; // לא חובה אם returnType = void\n}\n\nvoid = לא מחזיר שום ערך`,
        code: `public class Methods {

    static String greet(String name) {
        return "Hello, " + name + "! 👋";
    }

    static int max(int a, int b) {
        return (a > b) ? a : b;
    }

    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    static void printSeparator(int length) {
        for (int i = 0; i < length; i++) System.out.print("-");
        System.out.println();
    }

    public static void main(String[] args) {
        System.out.println(greet("Alice"));   // Hello, Alice! 👋
        System.out.println(greet("Bob"));     // Hello, Bob! 👋

        System.out.println("Max: " + max(7, 12)); // Max: 12

        printSeparator(20);

        System.out.println("7 prime? "  + isPrime(7));  // true
        System.out.println("10 prime? " + isPrime(10)); // false
    }
}`,
        funFact: "♻️ עיקרון DRY: Don't Repeat Yourself! אם כתבת אותו קוד פעמיים – כתוב פונקציה. פעמיים = פעם אחת יותר מדי!"
      },
      {
        id: "6b", title: "Method Overloading",
        content: `Overloading = אותו שם, פרמטרים שונים!\n\nJava מחליטה איזו גרסה להפעיל לפי הפרמטרים האלה.\n\nדוגמה:\nadd(int a, int b)\nadd(double a, double b)\nadd(int a, int b, int c)\n\n✅ החלטה בזמן compile – מהיר!\n✅ קוד נקי – פחות שמות לזכור\n❌ אין שינוי רק ב-return type`,
        code: `public class Overloading {

    // Same name, different parameter types/count
    static int add(int a, int b) {
        System.out.println("int + int");
        return a + b;
    }

    static double add(double a, double b) {
        System.out.println("double + double");
        return a + b;
    }

    static int add(int a, int b, int c) {
        System.out.println("int + int + int");
        return a + b + c;
    }

    static String add(String a, String b) {
        System.out.println("String + String");
        return a + " " + b;
    }

    public static void main(String[] args) {
        System.out.println(add(2, 3));          // 5
        System.out.println(add(2.5, 3.1));      // 5.6
        System.out.println(add(1, 2, 3));       // 6
        System.out.println(add("Java", "Quest")); // Java Quest
    }
}`,
        funFact: "📞 System.out.println עצמו הוא overloaded! יש גרסאות לint, double, String, boolean, char... לכן הוא מדפיס כל סוג!"
      },
      {
        id: "6c", title: "Recursion – רקורסיה",
        content: `רקורסיה = פונקציה שקוראת לעצמה!\n\nכמו מראות זו מול זו – אינסוף השתקפויות.\n\n⚠️ חייבים Base Case!\nבלי תנאי עצירה = Stack Overflow (קריסה).\n\nמבנה:\nif (base case) return result;  // עצֹור!\nreturn recursiveCall(smaller); // המשך`,
        code: `public class Recursion {

    static long factorial(int n) {
        if (n <= 1) return 1;              // Base Case
        return n * factorial(n - 1);       // Recursive call
    }

    static int fibonacci(int n) {
        if (n <= 1) return n;              // Base Cases: 0, 1
        return fibonacci(n-1) + fibonacci(n-2);
    }

    // Power: base^exp
    static long power(int base, int exp) {
        if (exp == 0) return 1;            // Base Case: anything^0 = 1
        return base * power(base, exp - 1);
    }

    public static void main(String[] args) {
        System.out.println("5! = "  + factorial(5));  // 120
        System.out.println("10! = " + factorial(10)); // 3628800

        System.out.print("Fibonacci: ");
        for (int i = 0; i <= 9; i++) {
            System.out.print(fibonacci(i) + " ");
        }
        // 0 1 1 2 3 5 8 13 21 34

        System.out.println("\\n2^10 = " + power(2, 10)); // 1024
    }
}`,
        funFact: "🐍 StackOverflow – לא רק אתר! כשרקורסיה רצה ללא עצירה, ה-Stack נמלא ומתפוצץ. האתר קרוי על שם השגיאה המפורסמת הזו!"
      }
    ],
    quiz: [
      {
        q: "מה 'void' אומר לגבי return type?",
        options: [
          "הפונקציה מחזירה 0",
          "הפונקציה לא מחזירה שום ערך",
          "הפונקציה ריקה (ללא קוד)",
          "שגיאה"
        ],
        answer: 1,
        explanation: "void אומר שהפונקציה מבצעת פעולה אך לא מחזירה ערך"
      },
      {
        q: "מה זה Base Case ברקורסיה?",
        options: [
          "הקריאה הראשונה לפונקציה",
          "תנאי העצירה של הרקורסיה",
          "הפרמטר הראשון",
          "הערך המוחזר"
        ],
        answer: 1,
        explanation: "Base Case הוא תנאי העצירה – בלעדיו הרקורסיה תרוץ לנצח!"
      },
      {
        q: "מה הפלט של:\nstatic int fact(int n){\n  if(n<=1) return 1;\n  return n*fact(n-1);\n}\nSystem.out.println(fact(4));",
        options: ["4", "12", "24", "1"],
        answer: 2,
        explanation: "4! = 4×3×2×1 = 24"
      },
      {
        q: "מה זה Method Overloading?",
        options: [
          "פונקציה שקוראת לעצמה",
          "פונקציה עם אותו שם אבל פרמטרים שונים",
          "דריסת method של class-אב",
          "קריאה למתודה פעמיים"
        ],
        answer: 1,
        explanation: "Overloading = אותו שם, פרמטרים שונים (type או כמות)"
      },
      {
        q: "כמה פעמים תיקרא הפונקציה:\nstatic int s(int n){\n  if(n==0) return 0;\n  return n + s(n-1);\n}\n\ns(3);",
        options: ["3", "4", "5", "אינסוף"],
        answer: 1,
        explanation: "s(3)→s(2)→s(1)→s(0) = 4 קריאות כולל Base Case"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 7 – Classes & Objects
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7, emoji: "🏰", title: "Classes & Objects", subtitle: "OOP מתחיל כאן",
    xpReward: 400, difficulty: "מתקדם",
    meme: {
      text: "כשאתה מסביר OOP לחבר",
      reaction: "🐱 'הכל זה Object... גם הכלב שלך זה Object'"
    },
    lessons: [
      {
        id: "7a", title: "Class ו-Object – בסיס",
        content: `Class = תבנית / תוכנית\nObject = מופע שנוצר מהתבנית\n\nדוגמה:\n🏠 תוכנית הבית = Class\n🏡 הבית עצמו (שנבנה) = Object\n\nClass מכיל:\n• Fields   – נתונים / תכונות\n• Methods  – פעולות / התנהגות\n• Constructor – יוצר Objects חדשים\n\nיצירת Object:\nClassName obj = new ClassName(params);`,
        code: `public class Car {
    // Fields
    String brand;
    String color;
    int year;
    int speed;

    // Constructor
    Car(String brand, String color, int year) {
        this.brand = brand;
        this.color = color;
        this.year  = year;
        this.speed = 0;    // starts at rest
    }

    // Methods
    void accelerate(int amount) {
        speed += amount;
        System.out.println(brand + " speed: " + speed + " km/h");
    }

    void brake() {
        speed = 0;
        System.out.println(brand + " stopped! 🛑");
    }

    void showInfo() {
        System.out.println(year + " " + color + " " + brand);
    }

    public static void main(String[] args) {
        Car tesla = new Car("Tesla", "Red",   2023);
        Car bmw   = new Car("BMW",   "Black", 2022);

        tesla.showInfo();
        tesla.accelerate(60);
        tesla.accelerate(40); // total: 100
        tesla.brake();

        System.out.println();
        bmw.showInfo();
        bmw.accelerate(80);
    }
}`,
        funFact: "🌍 Java הוא שפה Object-Oriented לחלוטין. כמעט הכל ב-Java הוא Object! String הוא Object, ArrayList הוא Object."
      },
      {
        id: "7b", title: "Inheritance – ירושה",
        content: `ירושה = Class יורש מ-Class אחר\n\nכמו DNA – ילד יורש תכונות מהורים!\n\nsuper class (הורה) → sub class (ילד)\n\nמילת המפתח: extends\n\nה-Subclass:\n✅ יורש את כל ה-fields וה-methods\n✅ יכול להוסיף דברים משלו\n✅ יכול לדרוס (Override) methods\n\nsuper() – קורא ל-constructor של ההורה`,
        code: `class Animal {
    String name;
    int age;

    Animal(String name, int age) {
        this.name = name;
        this.age  = age;
    }

    void eat() {
        System.out.println(name + " is eating 🍽️");
    }

    void makeSound() {
        System.out.println(name + " makes a sound...");
    }

    String describe() {
        return name + " (age " + age + ")";
    }
}

class Dog extends Animal {
    String breed;

    Dog(String name, int age, String breed) {
        super(name, age); // must be first line!
        this.breed = breed;
    }

    @Override
    void makeSound() {
        System.out.println(name + ": Woof woof! 🐕");
    }

    void fetch() {
        System.out.println(name + " fetches the ball! ⚽");
    }
}

class Cat extends Animal {
    Cat(String name, int age) { super(name, age); }

    @Override
    void makeSound() {
        System.out.println(name + ": Meow~ 🐈");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Dog rex = new Dog("Rex", 3, "Labrador");
        rex.eat();       // from Animal
        rex.makeSound(); // overridden in Dog
        rex.fetch();     // Dog-only
        System.out.println(rex.describe()); // from Animal

        Cat kitty = new Cat("Kitty", 2);
        kitty.makeSound(); // overridden in Cat
    }
}`,
        funFact: "🧬 Java מאפשרת ירושה בודדת (single inheritance) – class יכול לרשת מ-class אחד בלבד. בניגוד ל-C++ שמאפשרת ירושה מרובה!"
      },
      {
        id: "7c", title: "this & static – מילות מפתח חשובות",
        content: `this – מתייחס לאובייקט הנוכחי:\n• this.field   – שדה של ה-object\n• this(params) – קריאה ל-constructor אחר באותו class\n\nstatic – שייך לClass, לא לObject:\n• static fields     – משותף לכל האובייקטים\n• static methods    – אפשר לקרוא ללא new\n• Math.sqrt(), Math.abs() – כולם static!\n\nconst? ב-Java כותבים:\nfinal int MAX = 100; // לא ניתן לשינוי`,
        code: `public class Counter {
    // static field - shared by ALL Counter objects
    static int totalCreated = 0;

    // instance field - unique per object
    int id;
    String name;

    Counter(String name) {
        totalCreated++;          // increment shared counter
        this.id   = totalCreated;
        this.name = name;
    }

    void show() {
        System.out.println("Counter #" + id + ": " + name);
    }

    // static method - can call without creating an object
    static void showTotal() {
        System.out.println("Total counters created: " + totalCreated);
    }

    public static void main(String[] args) {
        Counter.showTotal();    // 0

        Counter a = new Counter("Alpha");
        Counter b = new Counter("Beta");
        Counter c = new Counter("Gamma");

        a.show(); // Counter #1: Alpha
        b.show(); // Counter #2: Beta
        c.show(); // Counter #3: Gamma

        Counter.showTotal();    // 3
    }
}`,
        funFact: "🔢 Math.PI, Math.E, Integer.MAX_VALUE – כולם static fields! ניגשים אליהם ישירות ללא יצירת Object."
      }
    ],
    quiz: [
      {
        q: "מה זה Constructor?",
        options: [
          "מתודה שהורסת Objects",
          "מתודה מיוחדת שנקראת כשיוצרים Object חדש",
          "מתודה סטטית",
          "תנאי בתוך Class"
        ],
        answer: 1,
        explanation: "Constructor נקרא אוטומטית עם new. שמו זהה לשם ה-Class"
      },
      {
        q: "איזו מילת מפתח משמשת לירושה?",
        options: ["implements", "inherits", "extends", "super"],
        answer: 2,
        explanation: "extends: class Dog extends Animal"
      },
      {
        q: "מה this מייצג בתוך method?",
        options: [
          "ה-Class עצמו",
          "ה-Object הנוכחי שעליו נקראה המתודה",
          "ה-Constructor",
          "ה-super class"
        ],
        answer: 1,
        explanation: "this מתייחס ל-Object הנוכחי (המופע הספציפי)"
      },
      {
        q: "מה ההבדל בין static method לרגילה?",
        options: [
          "static מהירה יותר",
          "static ניתן לקרוא ללא יצירת Object",
          "static חייבת לקבל פרמטרים",
          "אין הבדל"
        ],
        answer: 1,
        explanation: "static method שייכת ל-Class ולא ל-Object. קוראים לה: ClassName.methodName()"
      },
      {
        q: "מה @Override אומר?",
        options: [
          "שגיאה",
          "יצירת method חדש",
          "דריסת method של parent class",
          "מחיקת method"
        ],
        answer: 2,
        explanation: "@Override מצהיר שה-method מחליף method מ-super class"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 8 – OOP מתקדם
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8, emoji: "🎭", title: "OOP מתקדם", subtitle: "הכוח האמיתי של Java",
    xpReward: 500, difficulty: "מתקדם",
    meme: {
      text: "כשאתה לסוף מבין Polymorphism",
      reaction: "🤯 'רגע... אותו קוד מתנהג אחרת?! WHAT'"
    },
    lessons: [
      {
        id: "8a", title: "Encapsulation & Access Modifiers",
        content: `Encapsulation = הסתרת מידע והגנה עליו!\n\nכמו כספת:\n🔒 private   – רק בתוך ה-Class\n🔓 public    – נגיש מכל מקום\n🏠 protected – נגיש ל-subclasses ואותו package\n📦 default   – נגיש באותו package (ללא מילת מפתח)\n\nGetters & Setters:\n• getField()     – קרא ערך בצורה בטוחה\n• setField(val)  – שנה ערך עם validation`,
        code: `public class BankAccount {

    private String owner;
    private double balance;

    public BankAccount(String owner, double initial) {
        this.owner   = owner;
        this.balance = (initial >= 0) ? initial : 0;
    }

    // Getters
    public double getBalance() { return balance; }
    public String getOwner()   { return owner;   }

    // Business methods with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.printf("✅ Deposited $%.2f | Balance: $%.2f%n", amount, balance);
        } else {
            System.out.println("❌ Invalid deposit amount");
        }
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.printf("✅ Withdrawn $%.2f | Balance: $%.2f%n", amount, balance);
            return true;
        }
        System.out.println("❌ Insufficient funds!");
        return false;
    }

    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Alice", 1000);
        acc.deposit(500);
        acc.withdraw(200);
        acc.withdraw(5000); // fails!
        System.out.println("Owner: " + acc.getOwner());
        // acc.balance = 999999; // ❌ COMPILE ERROR - private!
    }
}`,
        funFact: "🏦 Encapsulation שומרת על integrity! בלעדיה, כל אחד יכול לשנות ישירות acc.balance. עם private רק הפונקציות המאשרות יכולות לשנות!"
      },
      {
        id: "8b", title: "Abstract Classes & Interfaces",
        content: `Abstract Class:\n• לא ניתן ליצור ממנה Object ישירות\n• מגדירה 'חוזה' לclasses יורשים\n• יכולה לכלול abstract methods לצד רגילות\n\nInterface:\n• אוסף של abstract methods (ו-default methods)\n• Class יכול לממש (implements) כמה interfaces!\n• כל methods הן public abstract כברירת מחדל`,
        code: `// Abstract class
abstract class Shape {
    abstract double area();     // must be implemented
    abstract String name();

    void describe() {           // concrete method
        System.out.printf("%s | Area: %.2f%n", name(), area());
    }
}

// Interface
interface Drawable {
    void draw();                // implicitly public abstract
    default String color() { return "black"; } // default method (Java 8+)
}

interface Resizable {
    void resize(double factor);
}

// Class extends 1 abstract, implements 2 interfaces
class Circle extends Shape implements Drawable, Resizable {
    double radius;
    Circle(double r) { this.radius = r; }

    @Override public double area()  { return Math.PI * radius * radius; }
    @Override public String name()  { return "⭕ Circle(r=" + radius + ")"; }
    @Override public void   draw()  { System.out.println("Drawing circle with r=" + radius); }
    @Override public void   resize(double f) { radius *= f; }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(5),
            new Circle(3)
        };

        for (Shape s : shapes) {
            s.describe(); // polymorphism - each behaves differently!
        }

        Circle c = new Circle(4);
        c.draw();
        System.out.println("Color: " + c.color()); // default
        c.resize(2.0);
        c.describe();
    }
}`,
        funFact: "🎭 Polymorphism מגיע מיוונית: poly=רבים, morphe=צורה. זהו אחד מ-4 עמודי OOP: Encapsulation, Inheritance, Polymorphism, Abstraction."
      },
      {
        id: "8c", title: "Exception Handling – טיפול בשגיאות",
        content: `Exception = שגיאת זמן ריצה\n\nבלי טיפול → התוכנית קורסת!\n\nמבנה:\ntry {\n  // קוד שעלול להשתבש\n} catch (ExceptionType e) {\n  // מה לעשות אם קרתה שגיאה\n} finally {\n  // תמיד ירוץ (לניקוי)\n}\n\nשגיאות נפוצות:\n• ArithmeticException – חלוקה ב-0\n• NullPointerException – גישה ל-null\n• ArrayIndexOutOfBoundsException\n• NumberFormatException – המרת String מספר שגויה`,
        code: `public class ExceptionHandling {
    public static void main(String[] args) {

        // Division by zero
        try {
            int result = 10 / 0; // ArithmeticException!
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("❌ Cannot divide by zero: " + e.getMessage());
        } finally {
            System.out.println("✅ Finally block always runs");
        }

        // Array out of bounds
        int[] arr = {1, 2, 3};
        try {
            System.out.println(arr[10]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("❌ Index out of range!");
        }

        // String to number conversion
        try {
            int num = Integer.parseInt("abc"); // NumberFormatException
        } catch (NumberFormatException e) {
            System.out.println("❌ Not a valid number: " + e.getMessage());
        }

        // Multiple catches
        Object obj = null;
        try {
            String s = (String) obj;
            System.out.println(s.length()); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("❌ Object is null!");
        } catch (ClassCastException e) {
            System.out.println("❌ Wrong type!");
        }
    }
}`,
        funFact: "🛡️ Exception Handling הוא כמו safety net בקרקס! בלעדיו, כל נפילה קטנה = Game Over. עם try-catch, התוכנית ממשיכה לרוץ!"
      }
    ],
    quiz: [
      {
        q: "מה private אומר?",
        options: [
          "נגיש מכל מקום",
          "נגיש רק בתוך ה-class",
          "נגיש רק ל-subclasses",
          "לא נגיש בכלל"
        ],
        answer: 1,
        explanation: "private = רק קוד בתוך אותו class יכול לגשת לזה"
      },
      {
        q: "האם אפשר ליצור Object מ-Abstract Class?",
        options: ["כן", "לא", "תלוי", "רק עם static"],
        answer: 1,
        explanation: "לא! Abstract class היא תבנית בלבד. יוצרים Objects מה-subclasses"
      },
      {
        q: "כמה Interfaces יכול class לממש?",
        options: ["אחד בלבד", "שניים", "עשרה", "כמה שרוצים"],
        answer: 3,
        explanation: "בניגוד ל-Inheritance (רק class אחד), Interface מאפשרת implements לכמה!"
      },
      {
        q: "מה קורה אם לא מטפלים ב-Exception?",
        options: [
          "Java מתעלמת ממנו",
          "התוכנית ממשיכה לרוץ",
          "התוכנית קורסת ומדפיסה שגיאה",
          "נוצר Object חדש"
        ],
        answer: 2,
        explanation: "Exception שלא נתפסת גורמת לקריסת התוכנית ולהדפסת stack trace"
      },
      {
        q: "מה ההבדל בין throw לבין throws?",
        options: [
          "אין הבדל",
          "throw זורק exception בפועל, throws מצהיר שהמתודה עלולה לזרוק",
          "throws זורק, throw מצהיר",
          "שניהם זורקים exception"
        ],
        answer: 1,
        explanation: "throw new Exception() = לזרוק exception. void myMethod() throws IOException = להצהיר שעלול להיזרק"
      },
      {
        q: "מה finally עושה?",
        options: [
          "רץ רק אם הייתה שגיאה",
          "רץ רק אם לא הייתה שגיאה",
          "רץ תמיד, בין אם הייתה שגיאה ובין אם לא",
          "מסיים את הלולאה"
        ],
        answer: 2,
        explanation: "finally תמיד רץ – מתאים לסגירת קבצים, חיבורי DB וכו'"
      }
    ]
  },
  {
    id: 9, emoji: "🧮", title: "Matrices (2D Arrays)", subtitle: "לשלוט במימדים",
    xpReward: 300, difficulty: "קשה",
    meme: { text: "כשאתה הולך לאיבוד במערך דו-מימדי", reaction: "😵 row? column? אבוד לגמרי..." },
    lessons: [
      {
        id: "9a", title: "מהי מטריצה?",
        content: `מטריצה (Matrix) = מערך דו-מימדי!\n\nחשבו על טבלת אקסל:\n🟦🟦🟦  ← שורה 0\n🟦🟦🟦  ← שורה 1\n🟦🟦🟦  ← שורה 2\n\nכדי לגשת לתא מסוים צריך:\n• שורה (row)   – הציר הראשון\n• עמודה (col)  – הציר השני\n\nסינטקס:\nint[][] matrix = new int[rows][cols];\nint[][] grid = {{1,2,3},{4,5,6}};`,
        code: `public class MatrixBasics {
    public static void main(String[] args) {
        // Create a 3x3 matrix
        int[][] matrix = new int[3][3];

        // Fill the matrix
        matrix[0][0] = 1;  matrix[0][1] = 2;  matrix[0][2] = 3;
        matrix[1][0] = 4;  matrix[1][1] = 5;  matrix[1][2] = 6;
        matrix[2][0] = 7;  matrix[2][1] = 8;  matrix[2][2] = 9;

        // Access element at row 1, column 2 (value = 6)
        System.out.println("matrix[1][2] = " + matrix[1][2]); // 6

        // Shorthand initialization
        int[][] grid = {{10, 20, 30},
                        {40, 50, 60}};
        System.out.println("Rows: "    + grid.length);    // 2
        System.out.println("Columns: " + grid[0].length); // 3
    }
}`,
        funFact: "🎲 שחמט, מסך המחשב ואפילו תמונות – כולם מטריצות! כל פיקסל על המסך הוא תא במטריצה ענקית."
      },
      {
        id: "9b", title: "לולאות מקוננות על מטריצה",
        content: `כדי לעבור על כל תאי המטריצה משתמשים ב-2 לולאות מקוננות:\n\n• הלולאה החיצונית עוברת על השורות\n• הלולאה הפנימית עוברת על העמודות בכל שורה\n\nסיבוכיות: O(rows × cols)\n\nדפוס:\nfor (int row = 0; row < matrix.length; row++) {\n    for (int col = 0; col < matrix[row].length; col++) {\n        // matrix[row][col]\n    }\n}`,
        code: `public class MatrixLoop {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Print all elements row by row
        System.out.println("Matrix contents:");
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + "\\t");
            }
            System.out.println(); // new line after each row
        }

        // Calculate sum of all elements
        int sum = 0;
        for (int[] row : matrix) {
            for (int val : row) {
                sum += val;
            }
        }
        System.out.println("Sum: " + sum); // 45

        // Find max element
        int max = matrix[0][0];
        for (int[] row : matrix) {
            for (int val : row) {
                if (val > max) max = val;
            }
        }
        System.out.println("Max: " + max); // 9
    }
}`,
        funFact: "🔄 For-each על מטריצה מחזיר int[] (שורה שלמה). לכן כותבים for (int[] row : matrix) ואז for (int val : row)."
      },
      {
        id: "9c", title: "שימושים מעשיים במטריצות",
        content: `מטריצות בעולם האמיתי:\n\n🎮 לוח משחק (שחמט, מינסוויפר, סודוקו)\n🖼️ תמונה – כל פיקסל הוא [R,G,B]\n✖️ כפולת מטריצות – בסיס ל-AI ו-Graphics\n📊 גיליון אקסל – טבלת נתונים\n\nטרנספוזיציה = להפוך שורות לעמודות:\n• שורה 0 → עמודה 0\n• שורה 1 → עמודה 1`,
        code: `public class MatrixUses {
    public static void main(String[] args) {

        // Multiplication table
        int[][] mulTable = new int[11][11];
        for (int i = 1; i <= 10; i++) {
            for (int j = 1; j <= 10; j++) {
                mulTable[i][j] = i * j;
            }
        }
        System.out.println("5 x 6 = " + mulTable[5][6]); // 30

        // Simple game board (0=empty, 1=X, 2=O)
        int[][] board = new int[3][3];
        board[0][0] = 1; // X at top-left
        board[1][1] = 2; // O at center
        board[2][2] = 1; // X at bottom-right
        System.out.println("Center: " + (board[1][1] == 2 ? "O" : "X")); // O

        // Matrix transpose
        int[][] m = {{1,2,3},{4,5,6}};  // 2x3
        int[][] t = new int[3][2];      // 3x2
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 3; j++)
                t[j][i] = m[i][j];
        System.out.println("t[0][1] = " + t[0][1]); // 4
    }
}`,
        funFact: "🤖 רשתות עצביות (Neural Networks) עושות חישוב עם כפולת מטריצות אלפי פעמים בשנייה! המטריצות שלמדנו הן הבסיס של ה-AI המודרני."
      }
    ],
    quiz: [
      {
        q: "מהי ההצהרה הנכונה של מטריצה 3×4 ב-Java?",
        options: ["int matrix = new int[3][4];", "int[][] matrix = new int[3][4];", "int[3][4] matrix;", "int matrix[][] = {3,4};"],
        answer: 1,
        explanation: "מערך דו-מימדי מוצהר עם int[][] ונוצר עם new int[שורות][עמודות]"
      },
      {
        q: "איך ניגשים לאיבר בשורה 2, עמודה 1 (0-indexed)?",
        options: ["matrix[1][2]", "matrix[2][1]", "matrix(2,1)", "matrix[2,1]"],
        answer: 1,
        explanation: "הסינטקס הוא matrix[row][col] – קודם שורה ואז עמודה: matrix[2][1]"
      },
      {
        q: "כמה לולאות for נדרשות כדי לעבור על כל תאי המטריצה?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "2 לולאות מקוננות: חיצונית לשורות, פנימית לעמודות"
      },
      {
        q: "מה מחזיר matrix.length עבור int[][] matrix = new int[5][3]?",
        options: ["3", "5", "15", "8"],
        answer: 1,
        explanation: "matrix.length = מספר השורות = 5. לאורך עמודה ניגש עם matrix[0].length = 3"
      },
      {
        q: "מהי טרנספוזיציה של מטריצה?",
        options: [
          "מחיקת מטריצה",
          "הפיכת שורות לעמודות ועמודות לשורות",
          "מיון המטריצה",
          "כפל של שתי מטריצות"
        ],
        answer: 1,
        explanation: "טרנספוזיציה מחליפה שורות ועמודות: t[j][i] = m[i][j]"
      }
    ]
  },
  {
    id: 10, emoji: "📉", title: "Sorting Algorithms", subtitle: "לסדר את הנתונים",
    xpReward: 350, difficulty: "מומחה",
    meme: { text: "מיון בועות מול מיון מהיר", reaction: "🏎️💨 QuickSort מנצח 100-0" },
    lessons: [
      {
        id: "10a", title: "מה זה מיון?",
        content: `מיון (Sorting) = לסדר אלמנטים בסדר מסוים\n\nלמה זה חשוב?\n• חיפוש מהיר יותר אחרי מיון\n• הצגת נתונים מסודרים\n• בסיס לאלגוריתמים מתקדמים\n\nמדדי ביצועים:\n• סיבוכיות זמן: O(?) – כמה השוואות?\n• סיבוכיות מקום: O(?) – כמה זיכרון נוסף?\n\nJava מובנה:\nArrays.sort(arr); // מהיר ויעיל!`,
        code: `import java.util.Arrays;

public class SortingIntro {
    public static void main(String[] args) {

        int[] nums = {5, 2, 8, 1, 9, 3, 7, 4, 6};

        System.out.println("Before: " + Arrays.toString(nums));
        // Before: [5, 2, 8, 1, 9, 3, 7, 4, 6]

        Arrays.sort(nums); // Java's built-in sort

        System.out.println("After:  " + Arrays.toString(nums));
        // After:  [1, 2, 3, 4, 5, 6, 7, 8, 9]

        // Sort strings alphabetically
        String[] names = {"Zoe", "Alice", "Mike", "Bob"};
        Arrays.sort(names);
        System.out.println(Arrays.toString(names));
        // [Alice, Bob, Mike, Zoe]

        // Sort in reverse (need Integer[], not int[])
        Integer[] desc = {3, 1, 4, 1, 5, 9, 2, 6};
        Arrays.sort(desc, (a, b) -> b - a);
        System.out.println(Arrays.toString(desc));
        // [9, 6, 5, 4, 3, 2, 1, 1]
    }
}`,
        funFact: "🔢 Java משתמש ב-Dual-Pivot Quicksort לפרימיטיביות ו-Timsort עבור Objects. Timsort הוא היברידי של Merge Sort ו-Insertion Sort – מהיר מאוד על נתונים כמעט-ממוינים!"
      },
      {
        id: "10b", title: "Bubble Sort – צעד אחר צעד",
        content: `Bubble Sort = הפשוט ביותר לכתיבה!\n\nהרעיון:\n• בכל מעבר – השוואת זוגות סמוכים\n• אם הסדר לא נכון → החלפה\n• "בועות" גדולות צפות למעלה\n\nסיבוכיות: O(N²) – איטי מאוד לנתונים גדולים\n\nדוגמה על [5,3,8,1]:\nמעבר 1: [3,5,8,1] → [3,5,1,8]\nמעבר 2: [3,1,5,8]\nמעבר 3: [1,3,5,8] ✓`,
        code: `public class BubbleSort {
    static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int pass = 0; pass < n - 1; pass++) {
            boolean swapped = false;
            for (int i = 0; i < n - 1 - pass; i++) {
                if (arr[i] > arr[i + 1]) {
                    // Swap
                    int temp  = arr[i];
                    arr[i]    = arr[i + 1];
                    arr[i+1]  = temp;
                    swapped   = true;
                }
            }
            if (!swapped) break; // already sorted!
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 1, 9, 2};
        System.out.println("Before: " + java.util.Arrays.toString(arr));
        // Before: [5, 3, 8, 1, 9, 2]

        bubbleSort(arr);

        System.out.println("After:  " + java.util.Arrays.toString(arr));
        // After:  [1, 2, 3, 5, 8, 9]
    }
}`,
        funFact: "🐌 Bubble Sort כל כך איטי שהוא שימש להרצאות מאז שנות ה-60 בתור 'מה לא לעשות'! על מיליון אלמנטים לוקח לו שנים. QuickSort לוקח שניות."
      },
      {
        id: "10c", title: "Merge Sort & Quick Sort – האמיתיים",
        content: `Merge Sort = פצל וכבוש!\n• מחלק את המערך לחצי\n• ממין כל חצי בנפרד (Recursion)\n• ממזג את שני החצאים חזרה\n• סיבוכיות: O(N log N) תמיד!\n\nQuick Sort = בחר pivot, חלק!\n• בוחר איבר ציר (pivot)\n• שם קטנים משמאל, גדולים מימין\n• ממין כל צד (Recursion)\n• ממוצע: O(N log N)`,
        code: `public class MergeSortDemo {

    static void mergeSort(int[] arr, int left, int right) {
        if (left >= right) return;
        int mid = (left + right) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }

    static void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) temp[k++] = arr[i++];
            else                  temp[k++] = arr[j++];
        }
        while (i <= mid)   temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];
        for (int x = 0; x < temp.length; x++)
            arr[left + x] = temp[x];
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr, 0, arr.length - 1);
        System.out.println(java.util.Arrays.toString(arr));
        // [3, 9, 10, 27, 38, 43, 82]
    }
}`,
        funFact: "🧩 Merge Sort הוא Stable Sort – שומר על הסדר היחסי של איברים שווים. זה חשוב כשממיינים לפי מספר קריטריונים (למשל – תחילה לפי שם, ואז לפי גיל)."
      }
    ],
    quiz: [
      {
        q: "מהי סיבוכיות הזמן הגרועה (Worst Case) של Bubble Sort?",
        options: ["O(N)", "O(N log N)", "O(N²)", "O(1)"],
        answer: 2,
        explanation: "Bubble Sort משווה כל זוג – N²/2 השוואות במקרה הגרוע ביותר → O(N²)"
      },
      {
        q: "איזו מתודת Java ממיינת מערך פרימיטיבי במקום?",
        options: ["Arrays.order(arr)", "Arrays.sort(arr)", "Collections.sort(arr)", "arr.sort()"],
        answer: 1,
        explanation: "Arrays.sort(arr) ממיין מערך פרימיטיבי במקום. Collections.sort עובד על Lists"
      },
      {
        q: "מהי הסיבוכיות הממוצעת של Merge Sort?",
        options: ["O(N²)", "O(N)", "O(N log N)", "O(log N)"],
        answer: 2,
        explanation: "Merge Sort תמיד O(N log N) – גרוע, ממוצע וטוב. זוהי סיבוכיות אופטימלית למיון מבוסס השוואות"
      },
      {
        q: "מה ה'בועה' ב-Bubble Sort מייצגת?",
        options: [
          "איבר אקראי",
          "האיבר הגדול ביותר שצף למיקומו הנכון בכל מעבר",
          "ה-pivot",
          "שגיאה בקוד"
        ],
        answer: 1,
        explanation: "בכל מעבר, האיבר הגדול ביותר 'צף' לסוף – כמו בועת אוויר במים"
      },
      {
        q: "מה עדיף: Arrays.sort() או Bubble Sort שכתבנו?",
        options: [
          "Bubble Sort כי אנחנו שולטים בקוד",
          "Arrays.sort() – ממוטב, נבדק ומהיר בהרבה",
          "תלוי בגודל המערך",
          "שווה – אותה סיבוכיות"
        ],
        answer: 1,
        explanation: "Arrays.sort() משתמש ב-Dual-Pivot QuickSort / Timsort – הרבה יותר מהיר ואמין מ-Bubble Sort ביישומים אמיתיים"
      }
    ]
  },
  {
    id: 11, emoji: "🌲", title: "Trees & Data Structures", subtitle: "לגדול מעלה",
    xpReward: 400, difficulty: "מוגזם",
    meme: { text: "כשהעץ יוצא מאיזון", reaction: "🍂 AVL Tree has entered the chat" },
    lessons: [
      {
        id: "11a", title: "עצים בינארים – מבוא",
        content: `עץ בינארי (Binary Tree) = מבנה נתונים היררכי\n\nמונחים בסיסיים:\n🌱 Root    – הצומת העליון (אין לו הורה)\n🍃 Leaf    – צומת ללא ילדים\n🌿 Node    – כל צומת בעץ\n📏 Height  – המרחק הארוך ביותר מ-Root ל-Leaf\n\nכל Node מחזיק:\n• ערך (data)\n• הפניה לילד שמאלי\n• הפניה לילד ימיני`,
        code: `class Node {
    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data  = data;
        this.left  = null;
        this.right = null;
    }
}

public class BinaryTree {
    Node root;

    BinaryTree() { root = null; }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();

        //        10
        //       /  \\
        //      5   15
        //     / \\
        //    3   7

        tree.root              = new Node(10);
        tree.root.left         = new Node(5);
        tree.root.right        = new Node(15);
        tree.root.left.left    = new Node(3);
        tree.root.left.right   = new Node(7);

        System.out.println("Root: "        + tree.root.data);       // 10
        System.out.println("Left child: "  + tree.root.left.data);  // 5
        System.out.println("Right child: " + tree.root.right.data); // 15
    }
}`,
        funFact: "🧪 עץ מאוזן בגובה log₂(N) – עץ עם מיליון צמתים צריך רק ~20 רמות! זה מה שהופך חיפוש בעץ לאפקטיבי כל כך."
      },
      {
        id: "11b", title: "Binary Search Tree – הכנסה וחיפוש",
        content: `BST – Binary Search Tree:\n\nחוק ה-BST:\n• כל ערך בתת-עץ שמאלי < ערך הצומת הנוכחי\n• כל ערך בתת-עץ ימיני > ערך הצומת הנוכחי\n\nלמה זה שימושי?\n• חיפוש, הכנסה ומחיקה ב-O(log N) בממוצע!\n• מאורגן אוטומטית\n\nחיפוש ב-BST:\nאם target < node → לך שמאלה\nאם target > node → לך ימינה\nאם target = node → מצאת! 🎯`,
        code: `class BSTNode {
    int val;
    BSTNode left, right;
    BSTNode(int v) { val = v; }
}

public class BST {
    BSTNode root;

    // Insert a value
    BSTNode insert(BSTNode node, int val) {
        if (node == null)       return new BSTNode(val);
        if (val < node.val)     node.left  = insert(node.left,  val);
        else if (val > node.val) node.right = insert(node.right, val);
        return node;
    }

    // Search for a value
    boolean search(BSTNode node, int target) {
        if (node == null)        return false;
        if (target == node.val)  return true;
        if (target < node.val)   return search(node.left,  target);
        return                          search(node.right, target);
    }

    public static void main(String[] args) {
        BST tree = new BST();
        int[] values = {10, 5, 15, 3, 7, 12, 18};
        for (int v : values)
            tree.root = tree.insert(tree.root, v);

        System.out.println(tree.search(tree.root, 7));   // true
        System.out.println(tree.search(tree.root, 99));  // false
        System.out.println(tree.search(tree.root, 12));  // true
    }
}`,
        funFact: "📚 TreeMap ב-Java מיושמת בתוכה עם BST מאוזן (Red-Black Tree). כל get() ו-put() הם O(log N)!"
      },
      {
        id: "11c", title: "מעברי עץ – In/Pre/Post-Order",
        content: `Traversal = ביקור בכל צמתי העץ בסדר מסוים\n\n🔵 In-Order   (שמאל → שורש → ימין)\n   → מחזיר ערכים ממוינים ב-BST!\n\n🔴 Pre-Order  (שורש → שמאל → ימין)\n   → שמור/שחזר מבנה עץ\n\n🟢 Post-Order (שמאל → ימין → שורש)\n   → מחשב ביטויים, מוחק עץ\n\nלעץ:      10\n        /   \\\n       5    15\n      / \\\n     3   7\n\nIn:   3,5,7,10,15\nPre:  10,5,3,7,15\nPost: 3,7,5,15,10`,
        code: `public class TreeTraversal {

    static class Node {
        int val; Node left, right;
        Node(int v) { val = v; }
    }

    // In-Order: Left → Root → Right
    static void inOrder(Node node) {
        if (node == null) return;
        inOrder(node.left);
        System.out.print(node.val + " ");
        inOrder(node.right);
    }

    // Pre-Order: Root → Left → Right
    static void preOrder(Node node) {
        if (node == null) return;
        System.out.print(node.val + " ");
        preOrder(node.left);
        preOrder(node.right);
    }

    // Post-Order: Left → Right → Root
    static void postOrder(Node node) {
        if (node == null) return;
        postOrder(node.left);
        postOrder(node.right);
        System.out.print(node.val + " ");
    }

    public static void main(String[] args) {
        Node root       = new Node(10);
        root.left       = new Node(5);
        root.right      = new Node(15);
        root.left.left  = new Node(3);
        root.left.right = new Node(7);

        System.out.print("In-Order:   "); inOrder(root);   System.out.println();
        // In-Order:   3 5 7 10 15

        System.out.print("Pre-Order:  "); preOrder(root);  System.out.println();
        // Pre-Order:  10 5 3 7 15

        System.out.print("Post-Order: "); postOrder(root); System.out.println();
        // Post-Order: 3 7 5 15 10
    }
}`,
        funFact: "🖩 מחשבוני ביטויים (expression evaluators) משתמשים ב-Post-Order traversal! 3+4 מיוצג כעץ ומחושב מהתחתית למעלה."
      }
    ],
    quiz: [
      {
        q: "מה זה Root בעץ?",
        options: ["הצומת השמאלי ביותר", "הצומת ללא ילדים", "הצומת העליון ללא הורה", "הצומת הגדול ביותר"],
        answer: 2,
        explanation: "Root הוא הצומת בראש העץ – אין לו הורה. כל עץ מתחיל ממנו"
      },
      {
        q: "מה החוק של BST?",
        options: [
          "ילד שמאלי > הורה > ילד ימיני",
          "ילד שמאלי < הורה < ילד ימיני",
          "כל הילדים שווים לשורש",
          "אין חוק מסוים"
        ],
        answer: 1,
        explanation: "ב-BST: ילד שמאלי < הורה < ילד ימיני. זה מאפשר חיפוש בינארי"
      },
      {
        q: "In-Order traversal על BST מחזיר ערכים ב:",
        options: ["סדר אקראי", "סדר יורד", "סדר עולה (ממוין)", "לפי גובה העץ"],
        answer: 2,
        explanation: "In-Order על BST = Left→Root→Right = ממוין בסדר עולה! זו תכונה יפה של BST"
      },
      {
        q: "מה סדר הביקור ב-Pre-Order?",
        options: [
          "שמאל → שורש → ימין",
          "שורש → שמאל → ימין",
          "שמאל → ימין → שורש",
          "ימין → שורש → שמאל"
        ],
        answer: 1,
        explanation: "Pre-Order: קודם השורש (Pre = לפני), אחר כך שמאל, אחר כך ימין"
      },
      {
        q: "מה זה Leaf בעץ?",
        options: ["הצומת הגדול ביותר", "הצומת הקטן ביותר", "צומת ללא ילדים", "השורש"],
        answer: 2,
        explanation: "Leaf הוא צומת שאין לו ילדים כלל – הוא נמצא בקצה העץ"
      }
    ]
  }
];
