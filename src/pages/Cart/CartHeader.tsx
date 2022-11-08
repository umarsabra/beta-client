import React from "react";

function CartHeader() {
  return (
    <header className="cart-header page-header">
      <h1 className="page-title cart-page-title">العربة</h1>
      <section className="header-cta cart-header-cta">
        <button className="delete-order-btn">مسح</button>
      </section>
    </header>
  );
}

export default CartHeader;
