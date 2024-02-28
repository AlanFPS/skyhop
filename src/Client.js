import React, { useState } from "react";
import "./Client.css";

function Client() {
  const [choice, setChoice] = useState("");

  return (
    <div className="client-wrapper">
      <div className="client-header">
        <div className="component-title">
          <p>Client:</p>
        </div>
        <div className="client-choice">
          <label>
            <input
              type="radio"
              value="single"
              checked={choice === "single"}
              onChange={(e) => setChoice(e.target.value)}
            />
            <span className="client-radio-text">Single</span>
          </label>
          <label style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              value="multiple"
              checked={choice === "multiple"}
              onChange={(e) => setChoice(e.target.value)}
            />
            <span className="client-radio-text">Multiple</span>
          </label>
        </div>
      </div>
      <div className="testing-centers">
        {Array.from({ length: 4 }, (_, index) => (
          <div className="testing-center" key={index}>
            <label className="center-label">Testing Center {index + 1}</label>
            <select className="center-dropdown">
              <option>Select Client</option>
              {/* Add more options here */}
            </select>
            <img src="/clock.png" alt="Clock" className="clock-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Client;
