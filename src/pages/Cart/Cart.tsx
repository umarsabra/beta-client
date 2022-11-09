import React, { useEffect } from "react";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";

import { order } from "../../data";

import "./styles/Cart.css";
import CartHeader from "./CartHeader";
import BarcodeScanner from "../../components/BarcodeScanner";

function Cart() {
  return (
    <section className="cart-view view">
      <BarcodeScanner
        onScan={(barcode) =>
          console.log({
            barcode: barcode,
            quantity: 1,
          })
        }
      />
      <CartHeader />
      <section className="cart-container">
        <CartTable order={order} />
        <CartSummary total_price={order.total_price} />
      </section>
    </section>
  );
}

export default Cart;
