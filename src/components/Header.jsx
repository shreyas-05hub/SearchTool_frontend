import React from "react";

export function Header() {
  return (
    <header
      style={{
        padding: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        background: "#fff",
        borderBottom: "1px solid #eee",
        marginBottom: 20,
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: 20, margin: 0 }}>
        Knowledge Discovery & Internal Search 
      </h1>
    </header>
  );
}
