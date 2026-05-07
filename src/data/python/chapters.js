const BASE_CHAPTERS = [
  {
    id: 1, emoji: "🐍", title: "Introduction & Variables", subtitle: "הכר את הנחש!", xpReward: 100, difficulty: "קל",
    meme: { text: "כשאתה כותב את הפרינט הראשון שלך", reaction: "🔥" },
    lessons: [
      { id: "1a", title: "מבוא לפייתון", content: "פייתון היא שפת תכנות עילית, קריאה ועוצמתית.\nאין בה צורך בנקודה-פסיק (;) או סוגריים מסולסלים ({}). היא עושה שימוש בהזחות (Indentation) לארגון הקוד.", code: "print(\"Hello, Python!\")\nprint(\"Welcome to the snake world\")", funFact: "פייתון לא נקראת על שם הנחש, אלא על שם קבוצת הקומדיה מונטי פייתון!" },
      { id: "1b", title: "משתנים (Variables)", content: "משתנה בדומה לקופסה, מאחסן מידע. בפייתון אין צורך להצהיר על סוג המשתנה מראש.\nהסוג נקבע אוטומטית לפי הערך המוצב.", code: "name = \"Dani\"\nage = 20\nheight = 1.75\nis_student = True\n\nprint(name, \"is\", age, \"years old.\")", funFact: "פייתון מזהה לבד מה סוג המשתנה - זה נקרא Dynamic Typing." }
    ],
    quiz: [
      { q: "איזו פקודה משמשת להדפסת טקסט למסך בפייתון?", options: ["System.out.println()", "console.log()", "print()", "echo()"], answer: 2, explanation: "print() היא פקודת ההדפסה של פייתון." },
      { q: "כיצד מגדירים משתנה חדש עם הערך 5?", options: ["int x = 5", "x : 5", "x = 5", "var x = 5"], answer: 2, explanation: "בפייתון אין צורך לציין טיפוס נתונים, פשוט משתמשים בשם המשתנה ובסימן שווה." },
      { q: "מה הקוד הבא מנסה לעשות, ומה נכון לגביו?\nname = 'Dana'\nage = 20\nprint(name, age)", options: ["הוא לא תקין כי חייבים להגדיר טיפוס", "הוא תקין וידפיס שם וגיל", "הוא ידפיס רק את age", "הוא יקרוס כי print לא עובד עם שני ערכים"], answer: 1, explanation: "print יכול לקבל כמה ערכים מופרדים בפסיקים ולדפיס אותם יחד.", hints: ["בדקו אם יש צורך בהגדרת סוג לפני ערך", "print בפייתון מקבל כמה פרמטרים", "אין כאן פעולת חיבור טקסטיבית מיוחדת"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\nif x = 5:\n    print('match')", options: ["חסר : בסוף", "צריך == ולא =", "חסר print", "אין באג"], answer: 1, explanation: "= מבצע השמה, לא השוואה. בתנאי צריך להשתמש ב-==.", hints: ["חפשו הבדל בין השמה להשוואה", "בתנאים משתמשים באופרטור שמשווה ערכים", "זה באג מאוד נפוץ אצל מתחילים"] }
    ]
  },
  {
    id: 2, emoji: "🔢", title: "Data Types & Strings", subtitle: "מחרוזות ומספרים", xpReward: 150, difficulty: "קל",
    meme: { text: "חיבור 1 + '1'", reaction: "🤦‍♂️ TypeError!" },
    lessons: [
      { id: "2a", title: "טיפוסי נתונים בסיסיים", content: "בפייתון מגוון טיפוסים מובנים מרכזיים:\n• int - מספר שלם\n• float - מספר עשרוני\n• str - מחרוזת מילים\n• bool - ערך בוליאני (True / False)", code: "pi = 3.14  # float\namount = 10  # int\nis_cool = True  # bool\n\nprint(type(pi))", funFact: "אפשר להשתמש בפונקציה type() כדי לברר לאיזה טיפוס המשתנה שייך." },
      { id: "2b", title: "פעולות על מחרוזות (Strings)", content: "מחרוזת ניתן ליצור עם גרש יחיד ('') או כפול (\"\").\nבעזרת מחרוזות נוכל לשרשר (לחבר) טקסטים או לשכפל אותם.", code: "text = \"Python\"\n# גישה לפי אינדקס\nprint(text[0])  # מדפיס P\nprint(text[-1]) # מדפיס n (תו אחרון!)\n\n# הכפלת מחרוזת\nprint(\"Ha\" * 3) # HaHaHa\n\n# אורך המחרוזת\nprint(len(text))", funFact: "אינדקס שלילי הוא מאפיין נוח מאד בפייתון. לדוגמה, אינדקס -1 מחזיר את התו האחרון במחרוזת." }
    ],
    quiz: [
      { q: "מה תהיה התוצאה של print('A' * 3)?", options: ["A", "AAA", "3A", "שגיאה"], answer: 1, explanation: "בפייתון ניתן להכפיל מחרוזת במספר לעומת שפות אחרות." },
      { q: "איזה ביטוי מתאר מתן אינדקס נכון לתו האחרון של מחרוזת text?", options: ["text[len(text)]", "text.last()", "text.end()", "text[-1]"], answer: 3, explanation: "במקום לחשב את האורך, ניתן פשוט למשוך אינדקס -1 שמציין את הסוף." },
      { q: "מה יקרה בקוד הבא?\nword = 'Python'\nprint(word[0])", options: ["y", "P", "Python", "שגיאה"], answer: 1, explanation: "אינדקס 0 מחזיר את התו הראשון במחרוזת.", hints: ["פייתון סופרת מאפס", "מהו התו הראשון ב-Python?", "אינדקס 0 = תחילת המחרוזת"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\ntext = 'Hello'\ntext[0] = 'Y'", options: ["חסר print", "מנסים לשנות String ישירות", "צריך להשתמש ב-append", "אין באג"], answer: 1, explanation: "מחרוזות בפייתון הן immutable, כלומר אי אפשר לשנות תו ספציפי במקום.", hints: ["בדקו אם טקסט בפייתון ניתן לשינוי", "יש טיפוס שצריך ליצור מחדש במקום לשנות", "פעולת שינוי ישירה על מחרוזת לא חוקית"] }
    ]
  },
  {
    id: 3, emoji: "🧮", title: "Math & Operators", subtitle: "בואו נעשה חשבון", xpReward: 180, difficulty: "קל",
    meme: { text: "מודולו מכה שנית", reaction: "🔢" },
    lessons: [
      { id: "3a", title: "אופרטורים בסיסיים", content: "חיבור (+), חיסור (-), כפל (*) וחילוק (/).\nבנוסף שתי פעולות מיוחדות: מודולו (%) שנותן את שארית החלוקה וחילוק שלם (//) שזורק את השארית.", code: "a = 10\nb = 3\nprint(a / b)  # 3.3333333333333335\nprint(a // b) # 3\nprint(a % b)  # 1 (שארית)", funFact: "חילוק רגיל (/) תמיד מחזיר float בפייתון 3, לא משנה מה היו המספרים." },
      { id: "3b", title: "אופרטור החזקה", content: "במקום להשתמש בפונקציה מיוחדת מספרייה, בפייתון משתמשים בפעמיים כוכבית לחזקה (**).", code: "base = 2\nexp = 3\nprint(base ** exp)\n# 2 בחזקת 3 = 8", funFact: "פייתון תומכת במספרים גדולים עד אינסוף (מילולית), היא תחשב את זה ולא תקרוס עד שיגמר זיכרון הראם!" }
    ],
    quiz: [
      { q: "מה מחזיר הביטוי 5 // 2?", options: ["2", "2.5", "1", "3"], answer: 0, explanation: "חילוק שלם מסלק את השארית ולכן התוצאה היא 2 ולא 2.5." },
      { q: "מה מתקבל מ-3 ** 2?", options: ["6", "9", "32", "5"], answer: 1, explanation: "סימן ** מייצג חזקה. שלוש בחזקת שתיים שווה ל-9." },
      { q: "מה הפלט של הביטוי 10 % 3?", options: ["0", "1", "3", "7"], answer: 1, explanation: "מודולו מחזיר את השארית לאחר חילוק.", hints: ["חשב 10 חלקי 3", "מה נשאר אחרי שלוש קבוצות של 3?", "המספר שלא נכנס למכפלה הוא השארית"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\nresult = 10 / / 2", options: ["חסרה נקודה-פסיק", "יש רווח מיותר בתוך אופרטור החילוק השלם", "צריך להשתמש ב-*", "אין באג"], answer: 1, explanation: "האופרטור לחילוק שלם הוא // בלי רווח באמצע.", hints: ["בדקו את הסימן של חילוק שלם", "האופרטור צריך להיות רציף", "רווח שובר את התחביר"] }
    ]
  },
  {
    id: 4, emoji: "🔀", title: "Conditions (If, Elif, Else)", subtitle: "קבלת החלטות", xpReward: 200, difficulty: "בינוני",
    meme: { text: "תמיד שוכחים את הנקודתיים", reaction: "🤬" },
    lessons: [
      { id: "4a", title: "מבנה תנאי בסיסי", content: "הגדרת תנאים חייבת להסתיים בנקודתיים (:) והפנים של התנאי יסומן באמצעות הזחה (Indentation) שזה בעצם רווחים.\nבפייתון אין סוגריים מסולסלים שמקיפים את בלוק הקוד.", code: "age = 18\nif age >= 18:\n    print(\"You are an adult\")\nelse:\n    print(\"You are a minor\")", funFact: "רוב המתכנתים משתמשים ב-4 רווחים כדי להגדיר הזחה, אך חובה לשמור על עקביות בכל הקובץ." },
      { id: "4b", title: "תנאי מרובה - elif", content: "כאשר יש לנו מספר בדיקות אנו נשתמש במילת המפתח elif (קיצור של else if).", code: "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")", funFact: "פייתון תפסיק לבדוק ברגע שתנאי אחד התקיים ותצא מהבלוק לחלוטין." }
    ],
    quiz: [
      { q: "איזו בעיה יש בקוד הבא?\nif x > 5\n    print('Big')", options: ["אין סוגריים לעטוף את x > 5", "חסר נקודתיים : בסוף שורת ה-if", "אי אפשר לבדוק גדול מ-5", "פייתון לא תומך ב-if"], answer: 1, explanation: "בפייתון חובה לשים נקודתיים (:) בסוף הצהרתו של if, elif או else." },
      { q: "מה ההבדל בין if ל-elif?", options: ["elif פועל במקביל ל-if", "elif יבדק רק אם ה-if שמעליו (או elifים אחרים) לא התקיימו", "אין הבדל", "elif מחליף את else"], answer: 1, explanation: "elif מגיע אחרי if ומספק אלטרנטיבה במקרה והתנאי הראשון לא היה נכון." },
      { q: "מה יקרה אם score = 90 בקוד הבא?\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')", options: ["A", "B", "A ואז B", "שגיאה"], answer: 0, explanation: "ברגע שתנאי if מתקיים, Python מדלגת על שאר ה-elifים.", hints: ["תנאי ראשון מתקיים לפני ה-elif", "האם Python ממשיכה לבדוק אחרי הצלחה?", "if עוצר את השרשרת כשהתנאי נכון"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\nif age >= 18:\nprint('Adult')", options: ["חסר else", "חסרה הזחה לפני print", "צריך להשתמש ב-elif", "אין באג"], answer: 1, explanation: "בלוק אחרי if חייב להיות מוזח פנימה.", hints: ["בדקו את הרווחים בתחילת השורה השנייה", "Python משתמשת בהזחה כמבנה", "בלוק בלי indent לא תקין"] }
    ]
  },
  {
    id: 5, emoji: "📝", title: "Lists & Tuples", subtitle: "רשימות מאורגנות", xpReward: 250, difficulty: "בינוני",
    meme: { text: "פייתון בודק אם אני מנסה למחוק מתחיל ב-Tuple", reaction: "🚫 בלתי אפשרי" },
    lessons: [
      { id: "5a", title: "רשימות (Lists)", content: "רשימה היא אוסף איברים הניתן לשינוי.\nמשתמשים בסוגריים מרובעים []. ניתן לשמור בהם משתנים מכל הסוגים יחד.", code: "fruits = [\"Apple\", \"Banana\"]\nfruits.append(\"Orange\") # הוספה לסוף הרשימה\nfruits.insert(1, \"Mango\") # הוספה באינדקס 1\n\nprint(fruits[0]) # Apple\nprint(len(fruits)) # 4", funFact: "אפשר לאחד רשימות בקלות בעזרת פקודת חיבור list1 + list2" },
      { id: "5b", title: "Tuple (טופל)", content: "דומה לרשימה אך הערכים בפנים לא ניתנים לשינוי לאחר היצירה.\nמוגדר באמצעות סוגריים עגולים ().", code: "coordinates = (10, 20)\nprint(coordinates[0])\n# מנסים לשנות?\n# coordinates[0] = 15 // TypeError!", funFact: "טופל מהיר יותר מרשימה ולוקח פחות זיכרון, מושלם לנתונים שלא אמורים להשתנות לעולם (כמו צבעים או קואורדינטות)." }
    ],
    quiz: [
      { q: "כיצד נוסיף אלמנט חדש לסוף הרשימה numbers?", options: ["numbers.push(5)", "numbers.add(5)", "numbers.insertEnd(5)", "numbers.append(5)"], answer: 3, explanation: "רשימות בפייתון משתמשות בפונקציית append() לצורך הוספת איבר למקום הריק האחרון." },
      { q: "מה נכון להגיד על Tuple?", options: ["ניתן להוסיף אליו איברים בכל עת", "הוא מיוצר באמצעות {}", "אינו ניתן לשינוי אחרי היווצרותו (Immutable)", "משמש רק למספרים"], answer: 2, explanation: "Tuple מיסודו הוא מבנה בלתי משתנה - אתה מקבל את מה שהגדרת מראש." },
      { q: "מה יקרה בקוד הבא?\nitems = [1, 2, 3]\nitems.insert(1, 99)", options: ["99 יתווסף לסוף", "99 יוחלף במקום 1", "99 ייכנס לאינדקס 1", "שגיאה"], answer: 2, explanation: "insert(index, value) מכניס את הערך בדיוק במיקום המבוקש.", hints: ["בדקו מה המשמעות של index", "insert לא מוסיף רק לסוף", "האיבר נכנס לפני מה שהיה במקום"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\ncoords = (10, 20)\ncoords[0] = 15", options: ["טופל לא יכול להכיל מספרים", "tuple הוא immutable ולכן אי אפשר לשנות איבר", "חסר print", "אין באג"], answer: 1, explanation: "Tuple לא ניתן לשינוי אחרי היצירה.", hints: ["בדקו האם tuple משתנה", "איזה מבנה נתונים לא ניתן לעריכה?", "ניסיון לשנות איבר קיים יכשל"] }
    ]
  },
  {
    id: 6, emoji: "🔁", title: "Loops: While", subtitle: "פעולות שוב ושוב ושוב", xpReward: 200, difficulty: "בינוני",
    meme: { text: "while True:\n  pass", reaction: "☠️ המחשב נשרף" },
    lessons: [
      { id: "6a", title: "לולאת While", content: "לולאה זו ממשיכה לפעול כל עוד תנאי מסוים מתקיים (True).\nתמיד צריכה לכלול יציאה במקרה והתנאי חייב להפסיק, אחרת ניפול ללולאה אינסופית.", code: "counter = 0\nwhile counter < 5:\n    print(counter)\n    counter += 1 # חייבים לקדם כדי למנוע לולאה אין-סופית!", funFact: "בפייתון אין את האופרטור ++ או -- שיש בשפות אחרות כמו C או Java." },
      { id: "6b", title: "Break ו- Continue", content: "break - עוצר ושובר לחלוטין מתוך הלולאה.\ncontinue - רק מדלג על המחזור הספציפי ועובר לבדיקה של המחזור הבא.", code: "i = 0\nwhile i < 10:\n    i += 1\n    if i == 3:\n        continue # ידלג על ההדפסה של 3\n    if i == 7:\n        break    # יצא מהלולאה לגמרי\n    print(i)", funFact: "שימוש נפוץ ב-while הוא לולאת while True יחד עם חיפוש מורכב שמשתמש ב-break שמוציא ממנה כשהוא מוצא מה שצריך." }
    ],
    quiz: [
      { q: "מה עושה פקודת break?", options: ["עוצרת לשנייה", "יוצאת מהלולאה לחלוטין", "מדלגת למחזור הבא של הלולאה", "מאפסת את המשתנים"], answer: 1, explanation: "break זורקת אותך החוצה מהלולאה באופן מיידי לגמרי." },
      { q: "האם יש למשתנה x פונקציית x++ בפייתון?", options: ["כן", "לא"], answer: 1, explanation: "לא, עליך לכתוב x += 1" },
      { q: "מה יקרה אם התנאי ב-while תמיד אמת?", options: ["הלולאה תסתיים לבד", "תתקבל לולאה אינסופית", "Python תוסיף break אוטומטי", "אין השפעה"], answer: 1, explanation: "אם אין מנגנון יציאה, while True עלול להיתקע לנצח.", hints: ["חשבו מה קורה כשהתנאי never becomes false", "יש צורך בעדכון משתנה או break", "לולאה בלי יציאה היא מסוכנת"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\ni = 0\nwhile i < 3:\n    print(i)", options: ["חסר break", "צריך += 2", "המשתנה i לא מתקדם ולכן הלולאה אינסופית", "אין באג"], answer: 2, explanation: "צריך לעדכן את i בתוך הלולאה, אחרת התנאי תמיד יישאר נכון.", hints: ["בדקו אם i משתנה בכל סיבוב", "אין כאן קידום מונה", "לולאה חייבת להתקדם כדי להסתיים"] }
    ]
  },
  {
    id: 7, emoji: "🔄", title: "Loops: For", subtitle: "מעבר על רצפים", xpReward: 250, difficulty: "בינוני",
    meme: { text: "range(10) מביא לי דברים עד 9", reaction: "🤨 נו באמת" },
    lessons: [
      { id: "7a", title: "For בסיסי + Range", content: "בשונה משפות אחרות, For פה הוא מעבר על סט נתונים בדומה ל-foreach.\nפונקציית range() היא יוצרנית של סדרות מספרים.", code: "for i in range(5):\n    print(i)\n# מדפיס 0, 1, 2, 3, 4\n\nfor i in range(2, 6):\n    print(i)\n# מדפיס 2, 3, 4, 5", funFact: "המספר האחרון ב-range לא נכלל מפרקטית חיתוך. range מתחיל מ-0 אם לא אמרת אחרת." },
      { id: "7b", title: "ריצה על רשימות או מחרוזות", content: "אנו יכולים לרוץ בקלות על כל רשימה או מחרוזת בלי משתני עזר מדדים (אינדקסים).", code: "word = \"Python\"\nfor letter in word:\n    print(letter.upper())\n\nnames = [\"Dani\", \"Yossi\", \"Omer\"]\nfor name in names:\n    print(f\"Hello {name}\")", funFact: "פייתון חכמה מספיק להעביר לכם את הערך ישירות לתוך המשתנה שהצעתם כל איטרציה." }
    ],
    quiz: [
      { q: "מה הפלט של list(range(3))?", options: ["[1, 2, 3]", "[0, 1, 2, 3]", "[0, 1, 2]", "[3]"], answer: 2, explanation: "range מתחיל בהגדרת ברירת המחדל מ-0 ומסתיים אחד לפני המספר שצייינת." },
      { q: "כיצד תכתוב לולאת for שתעבור על הרשימה my_list?", options: ["for(i=0; i<len(my_list); i++)", "for item in my_list:", "foreach my_list as item", "loop items in my_list:"], answer: 1, explanation: "פייתון הופכת את זה לקל עם ביטוי מילולי in פשוט וברור." },
      { q: "מה יקרה בקוד הבא?\nfor n in range(2, 5):\n    print(n)", options: ["2 3 4 5", "2 3 4", "1 2 3 4", "5 6 7"], answer: 1, explanation: "המספר האחרון ב-range לא נכלל בפלט.", hints: ["האם הגבול העליון כלול?", "range נעצר לפני המספר הסופי", "2 עד 5 אומר בפועל 2,3,4"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\nfor item in items\n    print(item)", options: ["חסר נקודתיים בסוף שורת ה-for", "צריך להשתמש ב-while", "אין באג", "print לא חוקי בתוך לולאה"], answer: 0, explanation: "לולאת for חייבת להסתיים בנקודתיים.", hints: ["בדקו את סוף שורת הלולאה", "Python דורשת : אחרי כותרת הבלוק", "זה באג תחביר קלאסי"] }
    ]
  },
  {
    id: 8, emoji: "🧵", title: "List Slicing & Comprehensions", subtitle: "קוסמות הרשימות", xpReward: 300, difficulty: "קשה",
    meme: { text: "comprehension במקום 6 שורות של לולאה", reaction: "😎 האקר" },
    lessons: [
      { id: "8a", title: "חיתוך מתקדם - Slicing", content: "slicing מאפשר לך לחתוך ולהוציא תת-קבוצה של אלמנטים ברשימה.\nהמבנה הבסיסי הוא [התחלה:סוף:צעד].", code: "nums = [0, 1, 2, 3, 4, 5]\n\nprint(nums[1:4])  # [1, 2, 3]\nprint(nums[::-1]) # מעולה! זה יוצר עותק הפוך!\nprint(nums[1::2]) # התחל באינדקס 1 וקפוץ ב-2 (למספרים זוגיים/אי זוגיים)", funFact: "זו הדרך היעילה ביותר ואחת הנפוצות ביותר לבצע חיתוכים על רשימה או מחרוזת." },
      { id: "8b", title: "List Comprehensions", content: "שיטה לקצר לולאות for ו-append לשורה אחת באופן אלגנטי ופייתוניסטי.", code: "numbers = [1, 2, 3, 4, 5]\n# משאיר רק מספרים זוגיים ומוסיף לחזקתם 2\nsquares = [x**2 for x in numbers if x % 2 == 0]\n\n# במקום להשתמש ב-for רגיל ולעשות append!\nprint(squares) # הפלט יהיה: [4, 16]", funFact: "זה לא רק מקצר ולעיתים הרבה יותר קריא, הפוקנציות הללו ממומשות בשפת C מאחורי הקלעים ונוטות להיות הרבה יותר מהירות." }
    ],
    quiz: [
      { q: "איך ניתן להפוך מחרוזת טקסט text בצורה הכי 'פייתונית' והמהירה ביותר?", options: ["text.reverse()", "reverse(text)", "text[::-1]", "text[-1]"], answer: 2, explanation: "Slicing עם קפיצה שלילית בגודל פרוסה פרוסה יוצר עותק הפוך לגמרי." },
      { q: "מה נוצר על ידי התבנית [x for x in range(3)]?", options: ["תיצור שגיאה", "תיצור רשימה השווה ל-[0, 1, 2]", "לולאת While פנימית", "מחרוזת"], answer: 1, explanation: "זה דוגמה ל-List comprehension שמקים רשימה מהאלמנטים שב-range, ושומר אותה." },
      { q: "מה מחזיר nums[1:4] עבור nums = [0, 1, 2, 3, 4, 5]?", options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[0, 1, 2]", "[4, 5]"], answer: 0, explanation: "החיתוך כולל את תחילת הטווח ולא כולל את הסוף.", hints: ["התחלה כלולה, סוף לא", "הפרוסה מתחילה ב-1 ונעצרת לפני 4", "זו בדיוק חתיכה רציפה באמצע הרשימה"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\nresult = [x for x in range(5) if x = 2]", options: ["חסר ]," , "צריך == בתוך תנאי if", "range לא עובד עם 5", "אין באג"], answer: 1, explanation: "בתנאי צריך להשתמש בהשוואה == ולא בהשמה =.", hints: ["בדקו את התנאי בתוך comprehension", "השוואה מול השמה", "זה באג תחביר/לוגיקה נפוץ"] }
    ]
  },
  {
    id: 9, emoji: "📕", title: "Dictionaries & Sets", subtitle: "מאגרי מילונים", xpReward: 320, difficulty: "בינוני",
    meme: { text: "חיפוש ב-Set מול חיפוש ב-List", reaction: "🚀" },
    lessons: [
      { id: "9a", title: "מילונים (Dictionaries)", content: "מילון הוא אוסף של מפתח-ערך (Key-Value), מוגדר על ידי סוגריים מסולסלים {}.\nהוא יעיל מאד לחיפושים ושומר על קשר לוגי (כמו JSON).", code: "person = {\n    \"name\": \"Alice\",\n    \"age\": 30\n}\n\n# שינוי ערך\nperson[\"age\"] = 31\nperson[\"job\"] = \"Developer\"  # הוספה אוטומטית\nprint(person.get(\"salary\", 0)) # יעיל: מביא default במידה ולא מצא", funFact: "המפתחות חייבים להיות מסוג שאינו משתנה, למשל str, tuple או int, אך לא ניתן להשתמש ברשימה (list) בתור המפתח." },
      { id: "9b", title: "סטים (Sets)", content: "סט מכיל מערך של נתונים ייחודיים בלבד! אין בו כפילויות, והוא אינו מחזיק מידע בצורה מסודרת עם אינדקסים.", code: "nums1 = {1, 2, 2, 3}\nprint(nums1) # {1, 2, 3} המידה עליהם רק כייחודיים!\n\nnums2 = {3, 4}\nprint(nums1.intersection(nums2)) # חיתוך: רק מה שנמצא בשניהם {3}\nprint(nums1.union(nums2)) # חיבור: איחוד {1, 2, 3, 4}", funFact: "אתה יכול להעביר list שיש בו כפילויות ל-set ובכך לנקות את הכפילויות בפקודה אחת: set(my_list)" }
    ],
    quiz: [
      { q: "מה הדרך המומלצת ביותר לגשת לערך בנבכי מילון כדי להימנע מנפילת KeyError במצב שאינו הוגדר?", options: ["my_dict['key']", "my_dict.get('key')", "my_dict.take('key')", "my_dict.find('key')"], answer: 1, explanation: "מתודת get מאפשרת לקבל ערך על ידי מפתח ולהחזיר None או ערך ברירת מחדל אם הוא לא שם." },
      { q: "מה קורה שמנסים להוסיף לסט (Set) איבר שכבר מצוי בו?", options: ["המערכת מזדעזעת וזורקת TypeError", "הוא מתווסף שוב", "כלום לא קורה, האיבר יישאר כייחודי פעם יחידה", "הסט הופך לרשימה"], answer: 2, explanation: "סט מיד דוחה ומתעלם פשוטו כמובנה מההוספה כיוון שהוא מגן על עיקרון הייחודיות, הקוד מספיק חכם לא ליפול בשל כך." },
      { q: "מה מחזירה הפקודה person.get('job', 'N/A') אם המפתח job לא קיים?", options: ["KeyError", "None", "N/A", "false"], answer: 2, explanation: "get עם ערך ברירת מחדל מחזיר את ברירת המחדל כשאין מפתח.", hints: ["בדקו מה הפרמטר השני ב-get", "ברירת מחדל מחליפה ערך חסר", "אין כאן קריסת KeyError"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\nmy_set = {1, 2, 3}\nmy_set[0] = 99", options: ["צריך append", "sets לא תומכים באינדקסים", "חסר print", "אין באג"], answer: 1, explanation: "ל-Set אין סדר ואינדקסים, לכן לא ניתן לגשת אליו כמו לרשימה.", hints: ["לסט אין מיקום קבוע", "אינדקסים שייכים לרשימות/מחרוזות", "סט הוא אוסף ייחודי ולא רשימה"] }
    ]
  },
  {
    id: 10, emoji: "🛠️", title: "Functions", subtitle: "בניית כלים אישיים", xpReward: 350, difficulty: "קשה",
    meme: { text: "לכתוב את אותם 20 שורות 100 פעם... או לכתוב פונקציה אחת", reaction: "♻️" },
    lessons: [
      { id: "10a", title: "הגדרת פונקציות באמצעות def", content: "פונקציה מאגדת פקודות בשם מרכזי אחד.\nמאפשרת לנו קריאה מרובה ללא צורך לשכפל את הקוד (DRY principle).", code: "def greet(name):\n    print(f\"Hello, {name}!\")\n\ngreet(\"Alice\")\ngreet(\"Bob\")", funFact: "האות f שלפני המחרוזת (כמו בדוגמה) פותחת יכולות מיוחדות לערבוב משתנים ישירות בתוך הטקסט עם {} (f-strings) - הרבה יותר פשוט מלרשום רצף של פלוסים ויציאות!" },
      { id: "10b", title: "החזרת ערכים - Return", content: "פונקציות יכולות גם לחשב ולהשיב נתונים למי שקרא להם באמצעות מילת המפתח return.\nמשתמשים בזה לשמירת חישובים שחזרו בתוך משתנה אחר.", code: "def add_numbers(a, b):\n    return a + b\n\nresult = add_numbers(5, 7)\nprint(result) # הפלט הוא 12", funFact: "פונקציה בפייתון יכולה להחזיר בקלות מספר של ערכים במקביל: \n return a, b \n זה מתבצע על ידי יצירת Tuple באופן שקט." }
    ],
    quiz: [
      { q: "איך נכריז על התחלת פונקציה חדשה שנקראת play?", options: ["function play()", "def play():", "create play():", "func play()"], answer: 1, explanation: "בפייתון מילות המפתח לפונקציה היא def ולאחריה הפונקציה כולל נקודתיים בסוף הסוגריים." },
      { q: "איזה מונח יגרום לפונקציה לפלוט בחזרה אל המשתנה את המידע שחושב?", options: ["echo", "output", "return", "throw"], answer: 2, explanation: "return מסיים את חיי הפונקציה בבלוק הקשה ומעביר לאחור את הממצא שמייד לאחריו." },
      { q: "מה מחזירה הפונקציה הבאה?\ndef add(a, b):\n    return a + b\n\nadd(2, 3)", options: ["5", "23", "שגיאה", "None"], answer: 0, explanation: "הפונקציה מחזירה את סכום שני הפרמטרים.", hints: ["בדקו מה return מחזיר", "2 + 3 = ?", "הפלט של הפונקציה הוא הערך המחושב"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\ndef greet(name)\n    print('Hi', name)", options: ["חסרה נקודתיים אחרי הכותרת", "צריך להשתמש ב-return", "חסרה קריאה לפונקציה", "אין באג"], answer: 0, explanation: "הגדרת פונקציה חייבת להסתיים בנקודתיים.", hints: ["בדקו את סוף שורת def", "פייתון דורשת : אחרי כותרת בלוק", "זה באג תחביר בסיסי מאוד"] }
    ]
  },
  {
    id: 11, emoji: "⚠️", title: "Error Handling (Try-Except)", subtitle: "כיצד לתפוס תקלות", xpReward: 400, difficulty: "קשה",
    meme: { text: "תמיד יש ExceptException שצועק עליך - כיבינו הכל", reaction: "😅" },
    lessons: [
      { id: "11a", title: "להילחם במסך השגיאה", content: "הקוד הכי מדהים קורס אם אנו מנסים לשים בו ערך לא חוקי.\nבאמצעות try block אנו מונעים קריסה ושומרים על יציבות (Catching Exceptions).", code: "try:\n    num = int(input(\"Enter a number: \"))\n    print(10 / num)\nexcept ZeroDivisionError:\n    print(\"You cannot divide by zero!\")\nexcept ValueError:\n    print(\"That wasn't a valid number!\")", funFact: "זה ידוע בתור 'קוד בטוח'. במקום לאמת 1,000 תנאים מראש, קל יותר לנסות (try) ולסלוח אם זה היה אסור." },
      { id: "11b", title: "בלוקים מתקדמים", content: "לצד except קיימים מקרים שבהם נרצה קוד שפועל רק בהצלחה, או בכל מצב.\nelse עבור פעולת הצלחה גמורה ללא חריגים.\nfinally פועל באדיקות על מנת לטאטא את החדר - פועל תמיד גם אם הייתה נפילה וגם אם הצליח הפעולה.", code: "try:\n    file = open(\"test.txt\")\n    text = file.read()\nexcept:\n    print(\"File not found!\")\nfinally:\n    print(\"I will always print!\")", funFact: "finally הוא המקום המושלם לסגירת התקשרויות (DB, File Streams) לאחר סיום ביטוח שלהם במערכת." }
    ],
    quiz: [
      { q: "איזו מילה שומרת על הקוד בגישה הראשונית של חישוב לפני שחיפשנו שגיאות?", options: ["do", "run", "finally", "try"], answer: 3, explanation: "אנו חייבים לעטוף התחלות מסוכנות ב-try Block." },
      { q: "האם בלוק finally תלוי בהצלחת ה-try או ה-except?", options: ["הוא ירוץ רק אם הקוד נכשל", "הוא מורץ תמיד, ולא משנה מה קרה בבלוקים האחרים", "הוא ירוץ רק אם everything passed", "לא קיים דבר כזה finally"], answer: 1, explanation: "finally הוא שלב הסיכום הסופי. הוא ייוזם בכל מקרה, מה שהופך אותו למושלם לניקוי קבצים פתוחים." },
      { q: "איזה חריג צפוי אם מנסים להמיר 'abc' ל-int?", options: ["ZeroDivisionError", "ValueError", "TypeError", "IndexError"], answer: 1, explanation: "מחרוזת שאינה מספר חוקי גורמת ל-ValueError.", hints: ["הבעיה היא בערך עצמו, לא בסוג הכללי", "פייתון לא יכולה לפרש abc כמספר", "ValueError הוא החריג המתאים להמרה לא חוקית"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\ntry:\n    x = int('abc')\nexcept ZeroDivisionError:\n    print('bad')", options: ["אין except", "תופסים את סוג החריג הלא נכון", "צריך finally", "אין באג"], answer: 1, explanation: "המרת abc ל-int תזרוק ValueError, לא ZeroDivisionError.", hints: ["איזה ערך מנסים להמיר?", "סוג החריג שגוי", "צריך לתפוס את החריג שמתאים להמרה לא חוקית"] }
    ]
  },
  {
    id: 12, emoji: "📦", title: "Modules & Imports", subtitle: "כלי העזר החיצוניים שלכם", xpReward: 400, difficulty: "קשה",
    meme: { text: "import antigravity - מתי זה מועיל?", reaction: "🚀" },
    lessons: [
      { id: "12a", title: "שימוש בספריות (Libraries)", content: "אין צורך לכתוב קוד מתמטי, תאריכי או קלוז'ר מחדש ברוב הפעמים. המון הושקע בפיצ'רים אלו שהופכים את פייתון לסכין השוויצרית של העולם (כמו random, math).", code: "import random\nimport math\n\nprint(random.randint(1, 10)) # בוחר מספר רנדומלי בין 1 ל-10\nprint(math.sqrt(16)) # יוציא שורש ריבועי שזה 4", funFact: "תכניסו את הפקודה 'import this' לטרמינל ותקבלו שיר מרגש על אופן היצירה האידיאולוגי של תוכנות בפייתון (Zen Of Python)!" },
      { id: "12b", title: "סוגי Import", content: "אפשר לקבל רק חלק מפונקציה במקום להעמיס את כל הספרייה העמודה. ניתן להיעזר ב-from.", code: "from datetime import datetime\nimport time as t # אנחנו אומרים לפייתון לשנות לו את השם בזמן הייבוא\n\nnow = datetime.now()\nprint(now)\nt.sleep(1) # ממתין שניה ולא בשמו הראשי \nprint(\"One second later\")", funFact: "ייבוא של מחלקות או פונקציות מסוימות על ידי from חוסך במקום ומקטין את ההצפה בסביבת שמות הפניות (NameSpace) שלך." }
    ],
    quiz: [
      { q: "מה הדרך לייבא ספרייה חיצונית שנקראת 'os'?", options: ["include os", "require('os')", "import os", "load os"], answer: 2, explanation: "חיבור לספריות וכלי עזר במעטפת של פייתון עושים מאז ומעולם תוך ציון import." },
      { q: "איך נייבא פונקציה מסוימת בלבד (כמו לחשב שורש - sqrt) מתוך ספריית ה-math למערך הנוכחי שלנו?", options: ["from math get sqrt", "import sqrt from math", "from math import sqrt", "pull math.sqrt"], answer: 2, explanation: "שימוש ב-from מבצע ניתוח של פניה אל ספרייה אחת ומשמיע את הבקשה לייבא דברים ספציפים (כמו במקרה הזה sqrt בלבד)." },
      { q: "מה עושה import time as t?", options: ["מוחק את time", "נותן לספרייה כינוי בשם t", "מייבא רק חלק מהספרייה", "אין דבר כזה as"], answer: 1, explanation: "as יוצר alias, כלומר כינוי קצר ונוח לשימוש.", hints: ["זה קיצור לשם ארוך יותר", "as לא מוחק את המודול", "alias הוא שם חלופי"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\nimport math\nprint(Math.sqrt(16))", options: ["צריך להשתמש ב-import as", "השם צריך להיות math ולא Math", "sqrt לא קיים", "אין באג"], answer: 1, explanation: "Python רגישה לאותיות גדולות/קטנות, ולכן צריך math ולא Math.", hints: ["בדקו רישיות", "Python case-sensitive", "שם המודול מיובא באותיות קטנות"] }
    ]
  },
  {
    id: 13, emoji: "🏗️", title: "Class & OOP: The Basics", subtitle: "בנית מפלצות וגלגולים", xpReward: 500, difficulty: "קשה מטורף",
    meme: { text: "תכנות מונחה עצמים (OOP) נראה כמו...", reaction: "רמה של גאוני על" },
    lessons: [
      { id: "13a", title: "יצירת אובייקטים מתבנית המחלקה (Class)", content: "כאן אנו מכינים הומשנה לדמויות וטפסים מרוכזים, בניית ישויות בעלות תעסוקה ומצב אישי בסיוע פייתון!\nנהוג להעניק למחלקה שם שמתחיל באות גדולה (למרות שאינו נדרש טכנית, זהו סטנדרט).", code: "class Dog:\n    # בנאי ראשית שאוגד הכל, ה-self הוא מקביל ל-this שמוכר מ-Java או מכל מקום.\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        print(f\"{self.name} says Woof!\")\n\nmy_dog = Dog(\"Rex\")\nmy_dog.bark()", funFact: "המתודה __init__ ידועה כ-'Dunder Method' מכיוון שהיא בעלת קו מפריד כפול מלפניים ומאחור (Double Underscore - Dunder)." },
      { id: "13b", title: "הורשה (Inheritance)", content: "מחלקות יכולות לאמץ מראה מתבניות עליונות וכך להיות בת של פריט או תכני רכב גדול יותר - בלי לחזור על קוד שנית.", code: "class Animal:\n    def eat(self):\n        print(\"Eating...\")\n\n# החתול יורש תכונותיה של החיה בעקבות העברתה (Animal)\nclass Cat(Animal):\n    def meow(self):\n        print(\"Meow!\")\n\nclyde = Cat()\nclyde.eat() # היכולת לרשת עבודה עברה בהצלחה מ-Animal\nclyde.meow() # יכולת משלו", funFact: "פייתון תומכת גם בהורשה מרובה (Multiple Inheritance) - יכולת לירוש מ-2 מחלקות שונות בו זמנית! יתרון שאין ל-Java או C#." }
    ],
    quiz: [
      { q: "בפייתון, מה המילה המקבילה להתייחסות העצמית של איבר מתוך המחלקה (בדומה ל-'this' בשפות מסוימות)?", options: ["self", "me", "this", "my"], answer: 0, explanation: "self נדרשת להעברה בפרמטר הראשון לקושריות של השיטות בתוך המחלקות תמיד." },
      { q: "איזה מן הבאים זו השיטה המייסדת של מחלקה שפועלת ברגע ההקמה של העצם? (בנאי / Constructor)", options: ["__start__", "__constructor__", "__init__", "init()"], answer: 2, explanation: "__init__ היא קווי החיים של יצירת המחזור הראשוני עבור קבלת משתנים ובניית האובייקט." },
      { q: "מה עושה self.name = name בתוך __init__?", options: ["יוצר משתנה מקומי בלבד", "שומר את הערך בתוך האובייקט", "מוחק את name", "מגדיר מחלקה חדשה"], answer: 1, explanation: "self.name שייך לאובייקט עצמו ונשמר לכל המתודות שלו.", hints: ["self מצביע על האובייקט הנוכחי", "זו תכונה של האובייקט", "הערך נשמר מעבר ל-init"] },
      { type: "bug", q: "מה הבאג בקוד הזה?\nclass Dog:\n    def __init__(name):\n        self.name = name", options: ["צריך ירושה", "חסר self בפרמטר הראשון", "חסרה נקודתיים אחרי class", "אין באג"], answer: 1, explanation: "מתודות מופע ב-Python צריכות לקבל self כפרמטר הראשון.", hints: ["בדקו את חתימת המתודה", "self חייב להיות ראשון", "בלי self Python לא יודעת לאיזה אובייקט לקשר"] }
    ]
  }
];

const EXTRA_LESSONS = {
  1: {
    id: "1c",
    title: "Best Practices להתחלה חזקה",
    content:
      "כדי לבנות בסיס טוב בפייתון חשוב לעבוד מסודר: לבחור שמות משתנים משמעותיים, להימנע מקוד כפול, ולהוסיף הדפסות בדיקה בשלבים הראשונים. בנוסף מומלץ להפריד בין קלט, עיבוד ופלט. כך קל יותר להבין איפה תקלה מתחילה ואיך לתקן אותה.\n\nטעויות נפוצות: שמות משתנים כלליים מדי (x, y, z), הדפסות מעורפלות, ומעבר לנושאים מתקדמים לפני שליטה בבסיס.",
    code:
      "name = \"Rahim\"\nage = 21\n\n# קלט ברור\nprint(f\"Name: {name}\")\nprint(f\"Age: {age}\")\n\n# עיבוד\nis_adult = age >= 18\n\n# פלט\nprint(f\"Adult? {is_adult}\")",
    funFact: "גם פרויקטי AI גדולים מתחילים מאותם עקרונות בסיסיים של קלט, עיבוד ופלט."
  },
  2: {
    id: "2c",
    title: "עבודה נכונה עם Strings ביום-יום",
    content:
      "מחרוזות בפייתון הן Immutable: כל שינוי יוצר מחרוזת חדשה. לכן חשוב לעבוד עם פעולות מובנות כמו strip, replace, split ו-join במקום ניסיונות לשנות תו ישירות. עבודה נכונה עם מחרוזות תחסוך באגים בהמשך, במיוחד בקלט מהמשתמש.",
    code:
      "text = \"  Python,Java,JS  \"\nclean = text.strip()\nitems = clean.split(',')\nnormalized = [item.lower() for item in items]\nresult = ' | '.join(normalized)\nprint(result)  # python | java | js",
    funFact: "f-strings נחשבות כיום לדרך הנוחה והקריאה ביותר לבניית טקסט דינמי בפייתון."
  },
  3: {
    id: "3c",
    title: "סדר פעולות ודיוק חישובי",
    content:
      "בחישובים מורכבים חשוב להבין סדר פעולות: סוגריים, חזקה, כפל/חילוק, חיבור/חיסור. במספרים עשרוניים ייתכנו הבדלי ייצוג קטנים בגלל אופן שמירת float בזיכרון. כשצריך דיוק כספי, עדיף לשקול decimal.",
    code:
      "value = 2 + 3 * 4\nprint(value)  # 14\n\nvalue2 = (2 + 3) * 4\nprint(value2)  # 20\n\nprint(0.1 + 0.2)  # לא תמיד 0.3 מדויק לגמרי",
    funFact: "המודול decimal מיועד במיוחד לחישובים פיננסיים מדויקים."
  },
  4: {
    id: "4c",
    title: "כתיבת תנאים קריאים",
    content:
      "תנאי טוב הוא תנאי שקל להבין במבט ראשון. העדף תנאים קצרים, שמות משתנים בוליאניים ברורים, ופיצול תנאים מורכבים לשלבים. כך גם אחרים בצוות יוכלו לתחזק את הקוד במהירות.",
    code:
      "age = 19\nhas_ticket = True\nis_open = True\n\ncan_enter = age >= 18 and has_ticket and is_open\n\nif can_enter:\n    print('כניסה מאושרת')\nelse:\n    print('כניסה נדחתה')",
    funFact: "בוליאנים בשם כמו is_valid או has_access הופכים תנאים ארוכים להרבה יותר קריאים."
  },
  5: {
    id: "5c",
    title: "בחירה בין List ל-Tuple",
    content:
      "השתמש ב-List כאשר הנתונים משתנים לאורך זמן, וב-Tuple כאשר המבנה קבוע. החלטה נכונה על מבנה הנתונים כבר בתחילת הפרויקט תקטין באגים ותשפר קריאות.",
    code:
      "# רשימה דינמית\nusers = ['Dana', 'Omer']\nusers.append('Noa')\n\n# טופל קבוע\nscreen_size = (1920, 1080)\n\nprint(users)\nprint(screen_size)",
    funFact: "Tuple יכול לשמש כמפתח במילון, בעוד List לא."
  },
  6: {
    id: "6c",
    title: "מניעת לולאות אין-סופיות",
    content:
      "ב-while חשוב להגדיר תנאי עצירה ברור ולעדכן משתנים בתוך הלולאה. מומלץ להוסיף מגבלת בטיחות (כמו מונה מקסימלי) בתהליכים שעלולים להיתקע.",
    code:
      "attempts = 0\nmax_attempts = 3\n\nwhile attempts < max_attempts:\n    print(f'Attempt {attempts + 1}')\n    attempts += 1\n\nprint('Done')",
    funFact: "במערכות production מוסיפים timeouts כדי למנוע לולאות תקועות."
  },
  7: {
    id: "7c",
    title: "for מתקדם עם enumerate",
    content:
      "לעיתים צריך גם ערך וגם אינדקס. במקום לנהל מונה ידני, השתמש ב-enumerate שמחזיר את שניהם בצורה נקייה ובטוחה.",
    code:
      "names = ['Avi', 'Roni', 'Maya']\nfor i, name in enumerate(names, start=1):\n    print(f'{i}. {name}')",
    funFact: "enumerate היא אחת הפונקציות שהכי משפרות קריאות בקוד פייתון יומיומי."
  },
  8: {
    id: "8c",
    title: "Comprehension בלי לאבד קריאות",
    content:
      "List comprehension עוצמתי מאוד, אבל אם הביטוי נהיה ארוך מדי כדאי לחזור ללולאה רגילה. כלל אצבע: אם אי אפשר להבין בשתי שניות, פשט את הקוד.",
    code:
      "nums = [1, 2, 3, 4, 5, 6]\n# טוב: קצר וברור\nevens = [n for n in nums if n % 2 == 0]\n\n# כשנהיה מורכב מדי, עדיף לולאה רגילה\nprint(evens)",
    funFact: "יש גם dictionary/set comprehensions באותו רעיון."
  },
  9: {
    id: "9c",
    title: "גישה בטוחה למילונים",
    content:
      "בעת עבודה עם נתוני API או JSON לא תמיד כל מפתח קיים. לכן עדיף להשתמש ב-get עם ברירת מחדל, ולשלב בדיקות לפני גישה לשדות פנימיים.",
    code:
      "user = {'name': 'Lior'}\nname = user.get('name', 'Unknown')\nemail = user.get('email', 'no-email@example.com')\nprint(name, email)",
    funFact: "בדיקות ברירת מחדל חוסכות חלק גדול מתקלות runtime באפליקציות אמיתיות."
  },
  10: {
    id: "10c",
    title: "פונקציות נקיות וקריאות",
    content:
      "פונקציה טובה עושה דבר אחד, עם שם ברור וקלט מוגדר. העדף פרמטרים עם ברירות מחדל במקום לוגיקה מסובכת בתוך הפונקציה.",
    code:
      "def format_user(name, age, city='Unknown'):\n    return f'{name} ({age}) - {city}'\n\nprint(format_user('Dana', 25))\nprint(format_user('Avi', 30, 'Tel Aviv'))",
    funFact: "תיעוד קצר (docstring) לכל פונקציה משדרג משמעותית תחזוקה בצוות."
  },
  11: {
    id: "11c",
    title: "טיפול שגיאות חכם",
    content:
      "עדיף לתפוס חריגים ספציפיים במקום except כללי, ולשמור הודעות שגיאה ברורות. כך אפשר לאבחן בעיות מהר יותר ולהימנע מהסתרת באגים אמיתיים.",
    code:
      "def divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return 'Cannot divide by zero'\n\nprint(divide(10, 2))\nprint(divide(10, 0))",
    funFact: "except כללי (בלי סוג שגיאה) נחשב פחות מומלץ בפרויקטים גדולים."
  },
  12: {
    id: "12c",
    title: "ניהול מודולים בפרויקטים",
    content:
      "כשהפרויקט גדל, חשוב לחלק קוד לקבצים לפי אחריות: utils, services, models ועוד. ארגון נכון של imports מונע בלבול ומקל על בדיקות ושימוש חוזר.",
    code:
      "# utils/math_helpers.py\ndef add(a, b):\n    return a + b\n\n# main.py\nfrom utils.math_helpers import add\nprint(add(2, 3))",
    funFact: "מבנה תיקיות טוב בתחילת הדרך חוסך שעות refactor בעתיד."
  },
  13: {
    id: "13c",
    title: "תכנון מחלקות נכון",
    content:
      "ב-OOP כדאי שכל מחלקה תטפל באחריות אחת ברורה. השתמש בהורשה כשיש קשר אמיתי מסוג 'הוא-סוג-של', ולא רק כדי למחזר קוד במהירות.",
    code:
      "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        raise NotImplementedError\n\nclass Dog(Animal):\n    def speak(self):\n        return f'{self.name} says woof'\n\nprint(Dog('Rex').speak())",
    funFact: "הרבה מערכות מורכבות בנויות מאובייקטים קטנים עם אחריות אחת מדויקת."
  }
};

export const CHAPTERS = BASE_CHAPTERS.map((chapter) => ({
  ...chapter,
  lessons: EXTRA_LESSONS[chapter.id]
    ? [...chapter.lessons, EXTRA_LESSONS[chapter.id]]
    : chapter.lessons
}));