import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <React.StrictMode>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </React.StrictMode>
  </CookiesProvider>
);
reportWebVitals();
