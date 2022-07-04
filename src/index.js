import React from "react";
import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import { App } from "./App";
import "./App.scss";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
