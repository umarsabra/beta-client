import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
function App() {
  return (
    <div className="App">
      <Menu />
      <section className="view">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
