import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Application from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
