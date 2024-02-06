import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";
import { RecoilRoot } from "recoil";
import axios from "axios";

//axios.defaults.baseURL = "http://localhost:3113/";
axios.defaults.baseURL = "https://api.skyreglis.com/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
