import React from "react";
import { DocumentCard } from "./DocumentCard";

export function SearchResults({ results, onOpen }) {
  if (results.length === 0) {
    return <p style={{ color: "#777" }}>No results found</p>;
  }
  return (
    <div>
      {results.map((r) => (
        <DocumentCard key={r.id} doc={r} onOpen={onOpen} />
      ))}
    </div>
  );
}
