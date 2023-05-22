import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
