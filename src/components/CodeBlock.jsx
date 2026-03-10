import { useState } from "react";

const KEYWORDS = [
  'public','private','protected','static','void','class','new','return',
  'if','else','for','while','do','switch','case','break','default','continue',
  'extends','implements','abstract','interface','super','this','import',
  'int','String','double','float','boolean','char','long','byte','short',
  'Override','null','true','false','final','try','catch','finally','throw','throws'
];

function highlight(line) {
  let result = line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Strings (must come before keywords)
  result = result.replace(/(\"[^\"]*\")/g, '<span style="color:#86efac">$1</span>');
  // Char literals
  result = result.replace(/(\'[^\']{1}\')/g, '<span style="color:#86efac">$1</span>');
  // Single-line comments
  result = result.replace(/(\/\/[^\n]*)/g, '<span style="color:#64748b;font-style:italic">$1</span>');
  // Numbers
  result = result.replace(/\b(\d+\.?\d*[fLd]?)\b/g, '<span style="color:#f9a8d4">$1</span>');
  // Keywords
  KEYWORDS.forEach(kw => {
    const re = new RegExp(`\\b(${kw})\\b`, 'g');
    result = result.replace(re, '<span style="color:#93c5fd;font-weight:600">$1</span>');
  });
  // Annotations
  result = result.replace(/(@\w+)/g, '<span style="color:#fcd34d">$1</span>');

  return result;
}

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const lines = code.split('\n');

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
          <span style={{ color: "#64748b", fontSize: 12 }}>Java</span>
          <button onClick={copy} style={{
            background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
            color: copied ? "#86efac" : "#94a3b8", borderRadius: 6,
            padding: "3px 10px", fontSize: 11, cursor: "pointer"
          }}>
            {copied ? "✓ הועתק!" : "העתק"}
          </button>
        </div>
        {/* Code area */}
        <div style={{ padding: "16px 0", overflowX: "auto", direction: "ltr", textAlign: "left" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", direction: "ltr" }}>
            <tbody>
              {lines.map((line, i) => (
                <tr key={i} style={{ lineHeight: "1.7" }}>
                  <td style={{
                    color: "#334155", fontSize: 12,
                    paddingLeft: 16, paddingRight: 16,
                    userSelect: "none", textAlign: "right", minWidth: 36,
                    fontFamily: "'JetBrains Mono','Fira Code',monospace",
                  }}>{i + 1}</td>
                  <td
                    style={{
                      color: "#e2e8f0", fontSize: 13.5, paddingLeft: 8, paddingRight: 24,
                      fontFamily: "'JetBrains Mono','Fira Code','Courier New',monospace",
                      whiteSpace: "pre", direction: "ltr", textAlign: "left", unicodeBidi: "embed"
                    }}
                    dangerouslySetInnerHTML={{ __html: highlight(line) || "&nbsp;" }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
