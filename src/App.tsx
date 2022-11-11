import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
function App() {

  localStorage.setItem("API_URL", "http://192.168.71.64:8080/api/v1")
  return (
    <div className="App">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
