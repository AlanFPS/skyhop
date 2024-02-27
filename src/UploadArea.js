import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
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

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="upload-wrapper">
      <div className="upload-header">
        <div className="component-title">
          <p>Select a manifest you'd like to import</p>
        </div>
      </div>
      <div className="upload-container">
        <div
          className="upload-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            onChange={handleChange}
            id="fileUpload"
            style={{ display: "none" }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/sheetUpload.png`}
            alt="Sheet Upload"
            style={{
              width: "22px",
              margin: "0 auto",
              display: "block",
              paddingBottom: "8px",
            }}
          />
          <label htmlFor="fileUpload" className="upload-label">
            {fileName || (
              <>
                Drag & Drop Here Or{" "}
                <strong style={{ fontWeight: 900 }}>Browse</strong>
              </>
            )}
          </label>
        </div>
        <button className="upload-btn">Upload Manifest</button>
      </div>
    </div>
  );
}

export default UploadArea;
