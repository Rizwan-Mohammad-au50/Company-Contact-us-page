import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Body from "./components/Body/Body";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Navbar />
      <main className="main_container"> 
      <Body />
    </main>
  </React.StrictMode>
);
