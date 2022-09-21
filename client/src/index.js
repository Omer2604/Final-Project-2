import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/header/NavBar/NavBar";
import React from "react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>
);
