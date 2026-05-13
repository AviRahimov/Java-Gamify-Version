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
  },
  {
    id: "p4", title: "מחרוזות ומתודות", description: "שחק עם מחרוזות ב-Python",
    code: `name = "Python"\nprint(name.upper())\nprint(name.lower())\nprint(len(name))`,
    question: "מה יודפס בשורה השנייה?", options: ["PYTHON", "python", "Python", "6"], answer: 1, explanation: "lower() הופך את כל התווים לאותיות קטנות → 'python'", xpReward: 35
  },
  {
    id: "p5", title: "פניות מותנות", description: "if / elif / else בפעולה",
    code: `x = 42\nif x > 100:\n    print("גדול")\nelif x > 40:\n    print("בינוני")\nelse:\n    print("קטן")`,
    question: "מה יודפס?", options: ["גדול", "בינוני", "קטן", "שגיאה"], answer: 1, explanation: "42 > 40 הוא True ו-42 > 100 הוא False, לכן elif נכנס לפעולה ומדפיס 'בינוני'", xpReward: 40
  },
  {
    id: "p6", title: "לולאת while", description: "while – כשאתה לא יודע כמה פעמים",
    code: `count = 0\nwhile count < 3:\n    count += 1\nprint(count)`,
    question: "מה יודפס?", options: ["0", "2", "3", "4"], answer: 2, explanation: "count מתחיל ב-0 ועולה ב-1 בכל פעם עד שמגיע ל-3. אחרי הלולאה count == 3", xpReward: 40
  },
  {
    id: "p7", title: "List Comprehension", description: "Python מגניב!",
    code: `nums = [x * 2 for x in range(4)]\nprint(nums)`,
    question: "מה יהיה הפלט?", options: ["[0, 1, 2, 3]", "[0, 2, 4, 6]", "[2, 4, 6, 8]", "[1, 2, 3, 4]"], answer: 1, explanation: "range(4) = 0,1,2,3 וכפולים ב-2: 0×2=0, 1×2=2, 2×2=4, 3×2=6", xpReward: 45
  },
  {
    id: "p8", title: "מילון ב-Python", description: "Dictionary – key:value",
    code: `d = {"name": "Alice", "age": 25}\nprint(d["name"])\nprint(d.get("city", "לא נמצא"))`,
    question: "מה ידפיס השורה השנייה?", options: ["None", "city", "לא נמצא", "KeyError"], answer: 2, explanation: "d.get('city', 'לא נמצא') מחזיר ברירת מחדל כי 'city' לא קיים במילון", xpReward: 45
  },
  {
    id: "p9", title: "פונקציות ב-Python", description: "def – הגדרת פונקציה",
    code: `def greet(name):\n    return f"שלום, {name}!"\n\nprint(greet("יוסי"))`,
    question: "מה יודפס?", options: ["greet(יוסי)", "שלום, יוסי!", "שלום, name!", "שגיאה"], answer: 1, explanation: "greet('יוסי') קוראת לפונקציה עם name='יוסי' ומחזירה f-string: 'שלום, יוסי!'", xpReward: 40
  },
  {
    id: "p10", title: "טיפול בשגיאות", description: "try / except – הגן על הקוד שלך",
    code: `try:\n    result = int("hello")\nexcept ValueError:\n    print("שגיאה!")\nprint("המשיך")`,
    question: "מה יודפס (שתי שורות)?", options: ["שגיאה!\nהמשיך", "המשיך בלבד", "שגיאה! בלבד", "ValueError"], answer: 0, explanation: "int('hello') זורק ValueError. ה-except מדפיס 'שגיאה!', ואז הקוד ממשיך ומדפיס 'המשיך'", xpReward: 50
  },
  {
    id: "p11", title: "מחלקות (Classes)", description: "OOP ב-Python – מהיר וקל",
    code: `class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        print(f"{self.name}: וואו!")\n\nd = Dog("רקס")\nd.bark()`,
    question: "מה יודפס?", options: ["Dog: וואו!", "רקס: וואו!", "name: וואו!", "שגיאה"], answer: 1, explanation: "Dog('רקס') יוצר אובייקט עם name='רקס'. bark() מדפיס f-string: 'רקס: וואו!'", xpReward: 50
  },
  {
    id: "p12", title: "לוגיקה בוליאנית", description: "and, or, not ב-Python",
    code: `a = True\nb = False\nprint(a and b)\nprint(a or b)\nprint(not a)`,
    question: "מה ידפיסו 3 השורות (בסדר)?", options: ["True, True, True", "False, True, False", "True, False, True", "False, False, True"], answer: 1, explanation: "True and False = False, True or False = True, not True = False", xpReward: 35
  },
  {
    id: "p13", title: "F-Strings", description: "עיצוב מחרוזות מודרני",
    code: `name = "עולם"\nnum = 42\nprint(f"שלום {name}! המספר הוא {num * 2}")`,
    question: "מה יודפס?", options: ["שלום {name}! המספר הוא {num * 2}", "שלום עולם! המספר הוא 84", "שלום עולם! המספר הוא 42", "שגיאה"], answer: 1, explanation: "f-string מחשב {name}='עולם' ו-{num*2}=84. הפלט: 'שלום עולם! המספר הוא 84'", xpReward: 35
  },
  {
    id: "p14", title: "מתודות רשימה", description: "append, pop ועוד",
    code: `lst = [1, 2, 3]\nlst.append(4)\nlst.pop(0)\nprint(lst)`,
    question: "מה יודפס?", options: ["[1, 2, 3, 4]", "[2, 3, 4]", "[1, 2, 3]", "[4]"], answer: 1, explanation: "append(4) מוסיף 4 לסוף: [1,2,3,4]. pop(0) מסיר index 0 (=1): [2,3,4]", xpReward: 40
  }
];
