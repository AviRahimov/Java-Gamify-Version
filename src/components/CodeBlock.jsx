import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ code, language = "java" }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{ position: "relative", marginTop: 16, marginBottom: 16, direction: "ltr" }}>
      <div style={{
        background: "#0f172a", borderRadius: 12, overflow: "hidden",
        border: "1px solid rgba(99,102,241,0.3)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}>
        {/* Title bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "10px 16px", background: "#1e293b",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
          </div>
          <span style={{ color: "#64748b", fontSize: 12, fontWeight: 600 }}>{language.toUpperCase()}</span>
          <button onClick={copy} style={{
            background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
            color: copied ? "#86efac" : "#94a3b8", borderRadius: 6,
            padding: "3px 10px", fontSize: 11, cursor: "pointer"
          }}>
            {copied ? "הועתק! ✓" : "העתק"}
          </button>
        </div>
        {/* Code area */}
        <div style={{ direction: "ltr", textAlign: "left" }}>
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            showLineNumbers={true}
            customStyle={{ margin: 0, padding: "16px", background: "transparent", fontSize: "14px", fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
} 
