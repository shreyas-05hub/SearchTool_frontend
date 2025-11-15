import React from "react";

export function PreviewModal({ doc, onClose }) {
  if (!doc) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "80%",
          maxHeight: "80%",
          overflow: "auto",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>{doc.title}</h3>

          <button
            onClick={onClose}
            style={{ padding: "6px 8px", cursor: "pointer" }}
          >
            Close
          </button>
        </div>

        <pre style={{ whiteSpace: "pre-wrap", marginTop: 12, color: "#222" }}>
          {doc.content || doc.snippet}
        </pre>
      </div>
    </div>
  );
}
