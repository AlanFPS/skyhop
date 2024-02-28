import React, { useState } from "react";
import "./ToleranceWindow.css"; // Ensure the CSS file is correctly linked

function ToleranceWindow() {
  const [isToggled, setIsToggled] = useState(false); // State to manage toggle

  return (
    <div className="tolerance-wrapper">
      <div className="tolerance-header">
        <div className="tolerance-title">
          <div className="component-title">
            <p>Tolerance Window:</p>
          </div>
        </div>
        <div className="toggle-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={isToggled}
              onChange={() => setIsToggled(!isToggled)}
            />
            <span className="slider round"></span>
          </label>
          <div className="tolerance-info"></div>
          <button className="tolerance-button">
            {isToggled ? "Toggle ON" : "Toggle OFF"}
            <div className="separator"></div>
            <img src="/skyhop/clock2.png" alt="Clock" className="clock-icon" />
            <label className="tolerance-level-text">
              Select Tolerance Level
            </label>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToleranceWindow;
