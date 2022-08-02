import React from "react";
import ReactDOM from "react-dom";
import Project from "./components/Project.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Project />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
