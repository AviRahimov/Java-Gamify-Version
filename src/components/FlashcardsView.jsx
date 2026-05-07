import { useState, useMemo } from "react";



function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardsView({ chapters, flashcardsData, completedChapters, courseName = "Java", onClose }) {
  const [filterChapter, setFilterChapter] = useState("all");
  const [deck,          setDeck]          = useState(null); // null = picker screen
  const [index,         setIndex]         = useState(0);
  const [flipped,       setFlipped]       = useState(false);
  const [known,         setKnown]         = useState([]);
  const [unknown,       setUnknown]       = useState([]);
  const [done,          setDone]          = useState(false);

  const availablechapters = chapters.filter(
    ch => !!completedChapters[ch.id] || ch.id === 1
  );

  const filteredCards = useMemo(() => {
    if (filterChapter === "all") return flashcardsData;
    return flashcardsData.filter(c => c.chapter === Number(filterChapter));
  }, [filterChapter]);

  function startDeck() {
    setDeck(shuffle(filteredCards));
    setIndex(0);
    setFlipped(false);
    setKnown([]);
    setUnknown([]);
    setDone(false);
  }

  function handleKnow(didKnow) {
    const card = deck[index];
    if (didKnow) setKnown(k => [...k, card.id]);
    else         setUnknown(u => [...u, card.id]);

    if (index + 1 >= deck.length) {
      setDone(true);
    } else {
      setIndex(i => i + 1);
      setFlipped(false);
    }
  }

  function reviewAgain() {
    const weak = deck.filter(c => unknown.includes(c.id));
    if (weak.length === 0) { setDone(false); setDeck(null); return; }
    setDeck(shuffle(weak));
    setIndex(0);
    setFlipped(false);
    setKnown([]);
    setUnknown([]);
    setDone(false);
  }

  // ── Results ──────────────────────────────────────────────────────────────
  if (done) {
    const pct = Math.round((known.length / deck.length) * 100);
    return (
      <div style={{
        minHeight: "100vh", background: "#020617", display: "flex",
        alignItems: "center", justifyContent: "center",
        fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl"
      }}>
        <div style={{ maxWidth: 460, width: "100%", padding: "0 20px", textAlign: "center" }}>
          <div style={{ fontSize: 72, marginBottom: 16 }}>
            {pct === 100 ? "🏆" : pct >= 70 ? "⭐" : "💪"}
          </div>
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>סיימת את החפיסה!</div>
          <div style={{ fontSize: 18, marginBottom: 24, color: "#94a3b8" }}>
            ידעת <span style={{ color: "#22c55e", fontWeight: 800 }}>{known.length}</span> מתוך{" "}
            <span style={{ fontWeight: 800 }}>{deck.length}</span> כרטיסיות ({pct}%)
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {unknown.length > 0 && (
              <button onClick={reviewAgain} style={{
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                color: "#fff", border: "none", borderRadius: 12,
                padding: "14px 24px", fontSize: 15, fontWeight: 700, cursor: "pointer"
              }}>🔄 חזור על החלשים ({unknown.length})</button>
            )}
            <button onClick={() => { setDeck(null); setDone(false); }} style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff", border: "none", borderRadius: 12,
              padding: "14px 24px", fontSize: 15, fontWeight: 700, cursor: "pointer"
            }}>🃏 חפיסה חדשה</button>
            <button onClick={onClose} style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
              color: "#94a3b8", borderRadius: 12,
              padding: "14px 24px", fontSize: 15, fontWeight: 700, cursor: "pointer"
            }}>← מפה</button>
          </div>
        </div>
      </div>
    );
  }

  // ── Active card ──────────────────────────────────────────────────────────
  if (deck) {
    const card     = deck[index];
    const progress = Math.round(((index) / deck.length) * 100);
    return (
      <div style={{
        minHeight: "100vh", background: "#020617",
        fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff",
        direction: "rtl", display: "flex", flexDirection: "column", alignItems: "center"
      }}>
        <style>{`
          .card-inner { transition: transform 0.5s; transform-style: preserve-3d; }
          .card-inner.flipped { transform: rotateY(180deg); }
          .card-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
          .card-back { transform: rotateY(180deg); }
        `}</style>

        <div style={{ width: "100%", maxWidth: 560, padding: "24px 16px" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <button onClick={() => setDeck(null)} style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8", borderRadius: 10, padding: "8px 14px", cursor: "pointer", fontSize: 13
            }}>← חזרה</button>
            <div style={{ fontSize: 13, color: "#64748b" }}>{index + 1} / {deck.length}</div>
          </div>

          {/* Progress bar */}
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 6, overflow: "hidden", marginBottom: 28 }}>
            <div style={{
              height: "100%", borderRadius: 99,
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              width: `${progress}%`, transition: "width 0.4s"
            }} />
          </div>

          {/* Score pills */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 24 }}>
            <span style={{
              background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)",
              color: "#86efac", borderRadius: 99, padding: "4px 14px", fontSize: 13, fontWeight: 700
            }}>✓ {known.length}</span>
            <span style={{
              background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)",
              color: "#fca5a5", borderRadius: 99, padding: "4px 14px", fontSize: 13, fontWeight: 700
            }}>✗ {unknown.length}</span>
          </div>

          {/* Flip card */}
          <div
            style={{ perspective: 1000, cursor: "pointer", marginBottom: 24 }}
            onClick={() => setFlipped(f => !f)}
          >
            <div className={`card-inner${flipped ? " flipped" : ""}`} style={{ position: "relative", height: 220 }}>
              {/* Front */}
              <div className="card-face" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.08))",
                border: "1px solid rgba(99,102,241,0.4)", borderRadius: 20,
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", padding: 28, textAlign: "center"
              }}>
                <div style={{ fontSize: 12, color: "#6366f1", fontWeight: 700, marginBottom: 16, letterSpacing: 2 }}>שאלה</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#f0f9ff", lineHeight: 1.6 }}>{card.front}</div>
                <div style={{ marginTop: 20, fontSize: 12, color: "#475569" }}>לחץ לחשיפת התשובה 👆</div>
              </div>
              {/* Back */}
              <div className="card-face card-back" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(16,185,129,0.06))",
                border: "1px solid rgba(34,197,94,0.4)", borderRadius: 20,
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", padding: 28, textAlign: "center"
              }}>
                <div style={{ fontSize: 12, color: "#22c55e", fontWeight: 700, marginBottom: 16, letterSpacing: 2 }}>תשובה</div>
                <div style={{
                  fontSize: 16, fontWeight: 600, color: "#86efac", lineHeight: 1.75,
                  fontFamily: card.back.includes(";") || card.back.includes("()") ? "'JetBrains Mono','Courier New',monospace" : "inherit",
                  direction: "rtl", whiteSpace: "pre-wrap"
                }}>{card.back}</div>
              </div>
            </div>
          </div>

          {/* Know / Don't know */}
          {flipped && (
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => handleKnow(false)} style={{
                flex: 1, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
                color: "#fca5a5", borderRadius: 14, padding: "16px", fontSize: 16,
                fontWeight: 700, cursor: "pointer", fontFamily: "inherit"
              }}>✗ לא ידעתי</button>
              <button onClick={() => handleKnow(true)} style={{
                flex: 1, background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)",
                color: "#86efac", borderRadius: 14, padding: "16px", fontSize: 16,
                fontWeight: 700, cursor: "pointer", fontFamily: "inherit"
              }}>✓ ידעתי!</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Picker screen ─────────────────────────────────────────────────────────
  return (
    <div style={{
      minHeight: "100vh", background: "#020617",
      fontFamily: "'Segoe UI',Arial,sans-serif", color: "#f0f9ff", direction: "rtl"
    }}>
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 50% 10%, rgba(99,102,241,0.12) 0%, transparent 60%)"
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto", padding: "24px 16px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "#94a3b8", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 14
          }}>← חזרה</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>🃏</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>כרטיסיות חזרה</div>
            <div style={{ fontSize: 12, color: "#64748b" }}>{flashcardsData.length} כרטיסיות</div>
          </div>
          <div style={{ width: 80 }} />
        </div>

        {/* Chapter filter */}
        <div style={{
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14, padding: 20, marginBottom: 24
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 14, color: "#a78bfa" }}>בחר פרק:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <button
              onClick={() => setFilterChapter("all")}
              style={{
                background: filterChapter === "all" ? "rgba(99,102,241,0.25)" : "rgba(255,255,255,0.05)",
                border: filterChapter === "all" ? "1px solid #6366f1" : "1px solid rgba(255,255,255,0.1)",
                color: filterChapter === "all" ? "#a5b4fc" : "#94a3b8",
                borderRadius: 99, padding: "8px 16px", fontSize: 13, cursor: "pointer", fontFamily: "inherit"
              }}>
              כל הפרקים ({flashcardsData.length})
            </button>
            {chapters.map(ch => {
              const count = flashcardsData.filter(c => c.chapter === ch.id).length;
              const sel   = filterChapter === String(ch.id);
              return (
                <button key={ch.id} onClick={() => setFilterChapter(String(ch.id))} style={{
                  background: sel ? "rgba(99,102,241,0.25)" : "rgba(255,255,255,0.05)",
                  border: sel ? "1px solid #6366f1" : "1px solid rgba(255,255,255,0.1)",
                  color: sel ? "#a5b4fc" : "#94a3b8",
                  borderRadius: 99, padding: "8px 16px", fontSize: 13, cursor: "pointer", fontFamily: "inherit"
                }}>
                  {ch.emoji} פרק {ch.id} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Info */}
        <div style={{
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 12, padding: "14px 18px", marginBottom: 28,
          fontSize: 14, color: "#64748b", lineHeight: 1.7
        }}>
          📋 <strong style={{ color: "#94a3b8" }}>{filteredCards.length} כרטיסיות</strong> נבחרו •
          לחץ על כרטיסייה לחשיפת התשובה •
          סמן ידעתי / לא ידעתי •
          בסוף תוכל לחזור על החלשים בלבד
        </div>

        <button onClick={startDeck} style={{
          width: "100%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff", border: "none", borderRadius: 16,
          padding: "18px", fontSize: 18, fontWeight: 700,
          cursor: "pointer", boxShadow: "0 8px 32px rgba(99,102,241,0.4)"
        }}>
          🃏 התחל חזרה!
        </button>

        <div style={{ textAlign: "center", marginTop: 32, color: "#1e293b", fontSize: 13 }}>
          {courseName} Quest • Built with ☕ and ❤️
        </div>
      </div>
    </div>
  );
}
