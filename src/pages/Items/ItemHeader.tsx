import React from "react";

function ItemHeader() {
  return (
    <header className="cart-header page-header">
      <h1 className="page-title cart-page-title">المخزن</h1>
      <section className="header-cta cart-header-cta">
        <button className="add-item-btn">إضف سلعة</button>
      </section>
    </header>
  );
}

export default ItemHeader;
