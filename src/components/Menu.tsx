import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import "./styles/Menu.css";
function Menu() {
  const style: CSSProperties = {
    backgroundColor: "white",
    borderLeft: "solid lightgray 2px",
  };

  return (
    <ul className="main-menu" style={style}>
      <Link to="/tabs">المنزل</Link>
      <Link to="stock">المخزن</Link>
      <Link to="orders">الطلبات</Link>
      <Link to="cart">العربة</Link>
    </ul>
  );
}

export default Menu;
