import React from "react";
import "./App.css"; // Make sure this CSS is properly structured for layout
import UploadArea from "./UploadArea";
import Dropdown from "./ImportDropdown";
import ElapseDataChecking from "./ElapseDataChecking";
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
            <Dropdown />
            <hr className="short-separator" />
            <UploadArea />
            <ElapseDataChecking />
            <ToleranceWindow />
          </div>
          <div className="column">
            {/* Place other components or content for the second column here */}
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
