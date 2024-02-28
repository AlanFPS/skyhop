import React from "react";
import { useState } from "react";
import "./App.css";
import UploadArea from "./UploadArea";
import ImportDropdown from "./ImportDropdown";
import ElapseDataChecking from "./ElapseDataChecking";
import ToleranceWindow from "./ToleranceWindow";
import SplitSchedule from "./SplitSchedule";
import LocationChecking from "./LocationChecking";
import Client from "./Client";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <div className="App">
        <div className="modal">
          <button className="dark-btn" onClick={toggleDarkMode}>
            &#127769;
          </button>
          <button className="close-btn">&#10005;</button>
          <div className="modal-content">
            <h1
              style={{
                textAlign: "center",
                fontWeight: "800",
                fontSize: "35px",
                height: "30px",
              }}
            >
              Document Upload
            </h1>
            <hr
              className="short-separator"
              style={{
                width: "33%",
                margin: "20px auto",
                borderColor: "lightgray",
              }}
            />
            <div className="content">
              <div className="column">
                <ImportDropdown />
                <hr className="short-separator" />
                <UploadArea />
                <hr className="short-separator" />
                <ElapseDataChecking />
                <hr className="short-separator" />
                <ToleranceWindow />
              </div>
              <div className="column">
                <SplitSchedule />
                <hr className="short-separator-right" />
                <LocationChecking />
                <hr className="short-separator-right" />
                <Client />
              </div>
            </div>
            <div className="footer">
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "850",
                  fontSize: "19.5px",
                  height: "30px",
                  marginTop: "30px",
                }}
              >
                Data in the import file is correct. Please press Continue to
                import.
              </h1>
              <button className="continue-btn">Continue Import</button>
              <button className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
