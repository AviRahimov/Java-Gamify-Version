const fs = require('fs');
let data = fs.readFileSync('src/data/java/chapters.js', 'utf8');
data = data.replace(/];[\s\S]*$/, '');
data += `,
  {
    id: 9, emoji: "🧮", title: "Matrices (2D Arrays)", subtitle: "לשלוט במימדים",
    xpReward: 300, difficulty: "קשה",
    meme: { text: "כשאתה הולך לאיבוד במערך דו-מימדי", reaction: "😵" },
    lessons: [
      { id: "9a", title: "מהי מטריצה?", content: "מטריצה מורכבת משורות ועמודות.", code: "int[][] matrix = new int[3][3];\\nmatrix[0][0] = 5;", funFact: "זוהי טבלה לכל דבר ועניין!" }
    ],
    quiz: { q: "איך מגיעים לאיבר הראשון בשורה השנייה בתצוגת arr?", options: ["arr[1,0]", "arr[1][0]", "arr[0][1]", "arr(1,0)"], answer: 1, explanation: "שורות תמיד מיוצגות קודם ואז העמודות!" }
  },
  {
    id: 10, emoji: "📉", title: "Sorting Algorithms", subtitle: "לסדר את הנתונים",
    xpReward: 350, difficulty: "מומחה",
    meme: { text: "מיון בועות מול מיון מהיר", reaction: "🏎️💨" },
    lessons: [
      { id: "10a", title: "מיון מהיר", content: "פעולת המיון מארגנת אלמנטים בסדר תקין כך שאפשר לחפש מהר יותר.", code: "Arrays.sort(myArray);", funFact: "BubbleSort כל כך איטי שגם צב ינצח אותו!" }
    ],
    quiz: { q: "מהי סיבוכיות הזמן הממוצעת של הקוד במיון טיפוסי?", options: ["O(N)", "O(1)", "O(N log N)", "O(N^2)"], answer: 2, explanation: "המיון היעיל כמו Merge/Quick פועל בסיבוכיות O(N log N)." }
  },
  {
    id: 11, emoji: "🌲", title: "Trees", subtitle: "לגדול מעלה",
    xpReward: 400, difficulty: "מוגזם",
    meme: { text: "כשהעץ יוצא מאיזון", reaction: "🍂" },
    lessons: [
      { id: "11a", title: "עצים בינארים", content: "מבנה נתונים שבו לכל צומת עשויים להיות עד שני בנים.", code: "class Node {\\n    int data;\\n    Node left, right;\\n}", funFact: "בתכנות עץ צומח מלמעלה למטה!" }
    ],
    quiz: { q: "לאיזה אובייקט אין הורה?", options: ["Leaf", "Root", "Branch", "Trunk"], answer: 1, explanation: "צורת השורש, Root, נמצאת בקצה העץ ואין לה הורה." }
  }
];
`;
fs.writeFileSync('src/data/java/chapters.js', data);
console.log('Done!');
