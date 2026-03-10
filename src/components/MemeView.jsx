import MemeCard from "./MemeCard.jsx";

export default function MemeView({ chapter, onContinue }) {
  return (
    <div style={{
      minHeight: "100vh", background: "#020617",
      fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl",
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{ maxWidth: 500, width: "100%", padding: 24 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>😂</div>
          <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>הפסקה קצרה!</div>
          <div style={{ color: "#64748b" }}>לפני החידון, קבל את ה-meme:</div>
        </div>

        <MemeCard meme={chapter.meme} />

        <button onClick={onContinue} style={{
          width: "100%",
          background: "linear-gradient(135deg, #f59e0b, #d97706)",
          color: "#000", border: "none", borderRadius: 16,
          padding: "18px", fontSize: 18, fontWeight: 900,
          cursor: "pointer", boxShadow: "0 8px 32px rgba(245,158,11,0.4)"
        }}>
          בסדר, מוכן לחידון! 🎯
        </button>
      </div>
    </div>
  );
}
