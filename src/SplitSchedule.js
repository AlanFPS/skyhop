import React, { useState } from "react";
import "./SplitSchedule.css";

function SplitSchedule() {
  const [choice, setChoice] = useState("");

  return (
    <div className="split-wrapper">
      <div className="split-header">
        <div className="component-title">
          <p>Split schedule using social distancing?</p>
        </div>
        <div className="component-title">
          <div className="split-choice">
            <label>
              <input
                type="radio"
                value="yes"
                checked={choice === "yes"}
                onChange={(e) => setChoice(e.target.value)}
              />{" "}
              <span className="radio-text">Yes</span>
            </label>
            <label style={{ marginLeft: "20px" }}>
              {" "}
              <input
                type="radio"
                value="no"
                checked={choice === "no"}
                onChange={(e) => setChoice(e.target.value)}
              />{" "}
              <span className="radio-text">No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitSchedule;
