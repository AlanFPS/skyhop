import React from "react";
import "./App.css";
import UploadArea from "./UploadArea";
import ImportDropdown from "./ImportDropdown";
import ElapseDataChecking from "./ElapseDataChecking";
import SplitSchedule from "./SplitSchedule";
import ToleranceWindow from "./ToleranceWindow";

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
            {/* <SplitSchedule /> */}
          </div>
        </div>
        <div className="footer">
          <button>Continue Import</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default App;
