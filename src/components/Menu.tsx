import React from "react";
import { Link } from "react-router-dom";
import "./styles/Menu.css";
function Menu() {
  return (
    <ul className="main-menu">
      <Link to="/">المنزل</Link>
      <Link to="/items">السلع</Link>
      <Link to="/orders">الطلبات</Link>
      <Link to="/Cart">العربة</Link>
    </ul>
  );
}

export default Menu;
