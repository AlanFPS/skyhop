import React from "react";
import "./App.css";
import UploadArea from "./UploadArea";
import ImportDropdown from "./ImportDropdown";
import ElapseDataChecking from "./ElapseDataChecking";
import ToleranceWindow from "./ToleranceWindow";
import SplitSchedule from "./SplitSchedule";
import LocationChecking from "./LocationChecking";
import Client from "./Client";

function App() {
  return (
    <div className="App">
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
        style={{ width: "17%", margin: "20px auto", borderColor: "lightgray" }}
      />
      <div className="modal">
        <div className="content">
          <div className="column">
            <ImportDropdown />
            <hr className="short-separator" />
            <UploadArea />
            <hr className="short-separator" />
            <ElapseDataChecking />
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
              fontWeight: "800",
              fontSize: "20px",
              height: "30px",
            }}
          >
            Data in the import file is correct. Please press Continue to import.
          </h1>
          <button>Continue Import</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default App;
