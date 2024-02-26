import React, { useState } from "react";
import "./UploadArea.css";

function UploadArea() {
  const [fileName, setFileName] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="upload-area"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {fileName || "Drag & Drop Here Or Browse"}
    </div>
  );
}

export default UploadArea;
