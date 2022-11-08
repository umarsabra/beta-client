import React, { useEffect, useState } from "react";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";

import { order } from "../../data";

import "./styles/Cart.css";
import CartHeader from "./CartHeader";

function Cart() {
  const [pendingOrder, setPendingOrder] = useState(order);

  useEffect(() => {
    //get current pending order
    //set order to pending order
  }, []);
  // const addOrderItem = (barcode: number, quantity: number) => {};

  // const deletePendingOrder = () => {};

  // const updatePendingOrderItemQuantity = (
  //   order_item_id: number,
  //   new_quantity: number
  // ) => {};

  // const deletePendingOrderItem = (order_item_id: number) => {};

  return (
    <section className="cart-view view">
      <CartHeader />
      <section className="cart-container">
        <CartTable order={pendingOrder} />
        <CartSummary total_price={order.total_price} />
      </section>
    </section>
  );
}

export default Cart;
