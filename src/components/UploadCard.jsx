import axios from "axios";
import React, { useState } from "react";

export function UploadCard(){
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const upload = async () => {
    if(!file) return alert("Please select a file");
    setLoading(true);
    const form = new FormData();
    form.append("file", file);
    try{
      const res = await axios.post("http://127.0.0.1:8000/api/upload/", form, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setMessage(`Uploaded: ${res.data.title}`);
    } catch(err){
      setMessage("Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{border:'1px solid #e6e6e6', padding:16, borderRadius:10, background:'#fff', marginBottom:20}}>
      <h2 style={{marginTop:0}}>Upload Document</h2>
      <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
      <button onClick={upload} disabled={loading} style={{marginLeft:10, padding:'8px 12px', background:'#2563eb', color:'#fff', border:'none', borderRadius:6}}>
        {loading ? "Uploading..." : "Upload"}
      </button>
      {message && <p style={{marginTop:10, color:'#0f5132'}}>{message}</p>}
    </div>
  );
}
