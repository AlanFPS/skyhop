import React, { useState } from "react";
import "./ElapseDataChecking.css";

function ElapseDataChecking() {
  return (
    <div className="elapse-wrapper">
      <div className="elapse-header">
        <div className="component-title">
          <p>Elapse Data Checking</p>
        </div>
        <div className="component-title">
          <p style={{ marginTop: "-8px", color: "#32AB89" }}>
            No Elapsed Dates!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ElapseDataChecking;
