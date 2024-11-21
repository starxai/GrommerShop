import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import { BlurProvider } from "./context/blurContext";
import Profile from "./context/profilepage/profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BlurProvider> */}
    <App />
    {/* </BlurProvider> */}
  </React.StrictMode>
);

reportWebVitals();
