import React from "react";
import Button from "react-bootstrap/Button";

function CartHeader() {
  return (
    <header className="cart-header page-header">
      <h1 className="page-title cart-page-title">العربة</h1>
      <section className="header-cta cart-header-cta">
        <Button variant="outline-danger">مسح</Button>
      </section>
    </header>
  );
}

export default CartHeader;
