import React from 'react';

export function SearchBar({query, setQuery, onSearch, loading}){
  return (
    <div style={{display:'flex', gap:8, marginBottom:16}}>
      <input
        style={{flex:1, padding:8, border:'1px solid #ddd', borderRadius:6}}
        placeholder="Search documents..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        onKeyDown={(e)=>{ if(e.key==='Enter') onSearch(); }}
      />
      <button onClick={onSearch} style={{padding:'8px 12px', background:'#16a34a', color:'#fff', border:'none', borderRadius:6}}>
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
