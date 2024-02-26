import React from "react";
import "./App.css"; // Make sure this CSS is properly structured for layout
import UploadArea from "./UploadArea";
import Dropdown from "./Dropdown";
import ElapseDataChecking from "./ElapseDataChecking";
import ToleranceWindow from "./ToleranceWindow";

function App() {
  return (
    <div className="App">
      <div className="modal">
        <h1>Document Upload</h1>
        <hr className="short-separator" />
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
