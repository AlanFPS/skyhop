import React, { useState } from "react";
import "./ImportDropdown.css";

function ImportDropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-wrapper">
      <label htmlFor="import-dropdown" className="dropdown-label"></label>
      <select
        id="import-dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="dropdown-select"
      >
        <option value="">Select Import Name:</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default ImportDropdown;
