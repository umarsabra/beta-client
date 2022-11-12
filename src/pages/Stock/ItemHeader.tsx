import React from "react";
import { Link } from "react-router-dom";

function ItemHeader() {
  return (
    <header className="cart-header page-header">
      <h1 className="page-title cart-page-title">المخزن</h1>
      <section className="header-cta cart-header-cta">
        <button className="add-item-btn">
          <Link to={"/pages/items/add"}>أضف سلعة</Link>
        </button>
      </section>
    </header>
  );
}

export default ItemHeader;
