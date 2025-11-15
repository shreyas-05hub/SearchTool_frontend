import React, { useState } from "react";
import axios from "axios";
import { Header } from "./Header";
import { UploadCard } from "./UploadCard";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { PreviewModal } from "./PreviewModal";

export default function MainPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

  const search = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://searchtool-backend-yzyd.onrender.com/search/", {
        params: { q: query },
      });
      setResults(res.data);
    } catch (e) {
      alert("Search failed");
    } finally {
      setLoading(false);
    }
  };

  const openDoc = (doc) => {
    setSelected(doc);
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
        padding: 16,
      }}
    >
      <Header />

      <UploadCard />

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={search}
        loading={loading}
      />

      <SearchResults results={results} onOpen={openDoc} />

      <PreviewModal doc={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
