import React from "react";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";

import { order } from "../../data";

import "./styles/Cart.css";

function Cart() {
  return (
    <div className="cart-view view">
      <CartTable order={order} />
      <CartSummary total_price={order.total_price} />
    </div>
  );
}

export default Cart;
