import axios from "axios";
import React, { useState } from "react";

export function UploadCard() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const upload = async () => {
    if (!files || files.length === 0) {
      return alert("Please select at least one file");
    }

    setLoading(true);
    setMessage("");

    const form = new FormData();
    for (let i = 0; i < files.length; i++) {
      form.append("files", files[i]); // backend expects "files"
    }

    try {
      const res = await axios.post("https://searchtool-backend-yzyd.onrender.com/upload/", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const uploadedNames = res.data.uploaded
        .map((doc) => doc.title || doc.file)
        .join(", ");

      setMessage(`Uploaded: ${uploadedNames}`);
    } catch (err) {
      console.error(err);
      setMessage("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #e6e6e6",
        padding: 16,
        borderRadius: 10,
        background: "#fff",
        marginBottom: 20,
      }}
    >
      <h2 style={{ marginTop: 0 }}>Upload Documents</h2>

      <input
        type="file"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        style={{ marginBottom: 10 }}
      />

      <button
        onClick={upload}
        disabled={loading}
        style={{
          marginLeft: 10,
          padding: "8px 12px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {message && (
        <p style={{ marginTop: 10, color: "#0f5132", fontWeight: 500 }}>
          {message}
        </p>
      )}
    </div>
  );
}
