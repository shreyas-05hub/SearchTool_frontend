import React from 'react';

export function DocumentCard({doc, onOpen}){
  return (
    <div style={{border:'1px solid #eee', padding:12, borderRadius:8, background:'#fff', marginBottom:10}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <strong>{doc.title}</strong>
        <button onClick={()=>onOpen(doc)} style={{padding:'6px 8px', borderRadius:6, border:'none', background:'#0ea5e9', color:'#fff'}}>Open</button>
      </div>
      <div style={{color:'#555', marginTop:8, fontSize:13}}>{doc.snippet}...</div>
    </div>
  );
}
