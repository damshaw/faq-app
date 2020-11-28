import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const el = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App faqData={el.getAttribute("data-param")} />
  </React.StrictMode>,
  el
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
