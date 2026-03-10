export default function MemeCard({ meme }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1e293b, #0f172a)",
      border: "2px solid rgba(251,191,36,0.3)",
      borderRadius: 16, padding: 24, marginBottom: 24, textAlign: "center",
      position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse at center, rgba(251,191,36,0.05) 0%, transparent 70%)"
      }} />
      <div style={{ fontSize: 13, color: "#fbbf24", marginBottom: 12, fontWeight: 700, letterSpacing: 2 }}>
        😂 MEME OF THE LESSON
      </div>
      <div style={{ fontSize: 16, color: "#f0f9ff", marginBottom: 12, lineHeight: 1.6, fontWeight: 600 }}>
        "{meme.text}"
      </div>
      <div style={{ fontSize: 18, color: "#94a3b8" }}>{meme.reaction}</div>
    </div>
  );
}
