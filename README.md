# ☕ Java Quest

> **An interactive, RPG-style Java learning app designed to teach Java programming in a fun, gamified way.**

🌐 **Live Demo:** [https://chic-souffle-ed914f.netlify.app/](https://chic-souffle-ed914f.netlify.app/)

---

## 📖 About

Java Quest turns learning Java into an adventure. Students progress through chapters, read lessons with real code examples, enjoy meme breaks, and then test their understanding with quizzes. Every correct answer earns XP, unlocks new ranks, and keeps the streak alive.

Built with **React + Vite**, runs entirely in the browser — no installation needed for students.

---

## 🎮 Features

| Feature | Details |
|---|---|
| 📚 **8 Chapters** | Full Java curriculum from Hello World to OOP |
| 📝 **24 Lessons** | Each with explanation, real code example, and a fun fact |
| 🎯 **43 Quiz Questions** | Multiple-choice with instant feedback and explanations |
| ⭐ **XP & Ranking System** | 7 ranks from Newbie Coder to Code Legend |
| 🔒 **Chapter Locking** | Complete a chapter to unlock the next |
| 😂 **Meme Breaks** | A funny meme between lessons and quizzes |
| 💻 **Syntax Highlighting** | Built-in Java code block with copy button |
| 📱 **Responsive** | Works on desktop, tablet, and mobile |

---

## 📚 Curriculum

| # | Chapter | Topics Covered |
|---|---|---|
| 1 | ☕ מה זה Java? | Hello World, program structure, variables intro |
| 2 | 🔢 סוגי נתונים | Primitives, String methods, type casting |
| 3 | 🔀 תנאים | if/else, switch, ternary operator |
| 4 | 🔄 לולאות | for, while, do-while, for-each, nested loops, break/continue |
| 5 | 📦 מערכים ורשימות | Arrays, ArrayList, Arrays API, binary search |
| 6 | ⚙️ פונקציות | Methods, overloading, recursion |
| 7 | 🏰 Classes & Objects | OOP basics, inheritance, static/this |
| 8 | 🎭 OOP מתקדם | Encapsulation, abstract/interface, exception handling |

---

## 🏗️ Project Structure

```
java-quest/
├── public/
├── src/
│   ├── App.jsx                  # Root controller – manages navigation & state
│   ├── main.jsx
│   ├── index.css
│   │
│   ├── data/
│   │   ├── chapters.js          # All 8 chapters: lessons, quizzes, memes
│   │   └── ranks.js             # XP rank thresholds + helper functions
│   │
│   └── components/
│       ├── ChapterMap.jsx       # Home screen – chapter selection grid
│       ├── LessonView.jsx       # Lesson reading screen
│       ├── MemeView.jsx         # Meme interstitial between lesson & quiz
│       ├── QuizPage.jsx         # Quiz container screen
│       ├── QuizView.jsx         # Question/answer logic + results screen
│       ├── CodeBlock.jsx        # Syntax-highlighted Java code block
│       ├── XPBar.jsx            # Animated XP progress bar
│       └── MemeCard.jsx         # Meme display card
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Running Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Clone or download the project
cd java-quest

# 2. Install dependencies (only needed once)
npm install

# 3. Start the development server
npm run dev
# → Open http://localhost:5173 in your browser
```

> **If npm scripts are blocked** (Windows execution policy), use:
> ```
> node node_modules\vite\bin\vite.js
> ```

---

## 🏗️ Building for Production

```bash
npm run build
# Output goes to the dist/ folder
```

> **If npm scripts are blocked:**
> ```
> node node_modules\vite\bin\vite.js build
> ```

---

## 🌐 Deployment

### Netlify (current deployment)
The app is deployed at: **[https://chic-souffle-ed914f.netlify.app/](https://chic-souffle-ed914f.netlify.app/)**

To redeploy after changes:
1. Run `node node_modules\vite\bin\vite.js build`
2. Go to your Netlify dashboard
3. Drag and drop the `dist/` folder onto the deploy area

### Other free options
| Platform | How |
|---|---|
| **GitHub Pages** | Push to GitHub → set `base` in vite.config.js → `npx gh-pages -d dist` |
| **Vercel** | Connect GitHub repo → Vercel auto-deploys on every push |

---

## 🛠️ Tech Stack

- **React 19** – UI components
- **Vite 8** – Build tool and dev server
- **Pure CSS-in-JS** – No external CSS framework (all styles are inline)
- **No external dependencies** – No UI library, no router, no state manager

---

## ✏️ Adding New Content

### Add a new chapter
Open `src/data/chapters.js` and add a new object to the `CHAPTERS` array following this structure:

```js
{
  id: 9,
  emoji: "🗺️",
  title: "Chapter Title",
  subtitle: "Short tagline",
  xpReward: 550,
  difficulty: "מתקדם",
  meme: {
    text: "Funny meme text",
    reaction: "😂 reaction"
  },
  lessons: [
    {
      id: "9a",
      title: "Lesson Title",
      content: `Lesson explanation text...`,
      code: `public class Example { ... }`,
      funFact: "⚡ Interesting fact..."
    }
  ],
  quiz: [
    {
      q: "Question text?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: 0,          // index of correct option (0-based)
      explanation: "Why this answer is correct."
    }
  ]
}
```

### Add a new rank
Open `src/data/ranks.js` and add an entry to the `RANKS` array:

```js
{ name: "Rank Name", minXP: 4000, icon: "🔥", color: "#ff6b6b" }
```

---

## 👨‍🏫 For Teachers

Share the live link with students — no signup, no login, no installation required.  
Students play directly in their browser and progress is tracked locally in their session.

- The app is in **Hebrew** (RTL) with all code examples in English
- Each chapter is locked until the previous one is completed
- Quiz scoring is proportional: answering 7/10 earns 70% of the chapter XP

---

## 📄 License

MIT — free to use, modify, and distribute.
