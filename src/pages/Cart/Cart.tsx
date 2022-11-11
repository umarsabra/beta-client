import React, { useState, useEffect } from "react";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";

import "./styles/Cart.css";
import CartHeader from "./CartHeader";
import BarcodeScanner from "../../components/BarcodeScanner";
import Order from "../../types/OrderType";
import OrderService from "../../services/OrderService";
import { OrderItemCreation } from "../../types/OrderItem";

function Cart() {
  const initOrder: Order = {
    total_price: 0,
    total_cost: 0,
    order_items: [],
  };

  const [order, setOrder] = useState(initOrder);

  useEffect(() => {
    const setPendingOrder = async () => {
      const pendingOrder: Order = await OrderService.getPendingOrder();
      setOrder(pendingOrder);
    };
    setPendingOrder();
  }, []);

  const onScan = async (barcode: number) => {
    const new_order_item: OrderItemCreation = {
      barcode: barcode,
      quantity: 1,
    };

    const existedOrderItem = order.order_items.find(
      (order_item) => order_item.barcode === new_order_item.barcode
    );

    const mod_order_item = existedOrderItem
      ? {
          barcode: existedOrderItem.barcode,
          quantity: existedOrderItem.quantity + 1,
        }
      : new_order_item;

    const updatedOrder: Order = await OrderService.updateOrderItem(
      mod_order_item as unknown as OrderItemCreation
    );

    setOrder(updatedOrder);
  };

  return (
    <section className="cart-view view">
      <BarcodeScanner onScan={(barcode) => onScan(barcode)} />
      <CartHeader />
      <section className="cart-container">
        <CartTable setOrder={setOrder} order={order} />
        <CartSummary total_price={order.total_price} />
      </section>
    </section>
  );
}

export default Cart;
