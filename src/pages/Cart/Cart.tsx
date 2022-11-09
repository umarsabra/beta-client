import React, { useState, useEffect } from "react";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";


import "./styles/Cart.css";
import CartHeader from "./CartHeader";
import BarcodeScanner from "../../components/BarcodeScanner";
import Order from "../../types/OrderType";

function Cart() {
  const initOrder: Order = {
    
    total_price: 0,
    total_cost: 0,
    order_items: []
  }
  const [order, setOrder] = useState(initOrder)





  useEffect(()=>{
    
  const getPendingOrder = async () =>{
    const pendingOrderRes =  await fetch(localStorage.getItem("API_URL") + "/orders/pending")
    return pendingOrderRes.json()
  }

    const setPendingOrder = async () =>{
      const pendingOrder: Order = await getPendingOrder()
      console.log(pendingOrder)
      setOrder(pendingOrder)
    }
    setPendingOrder()
  }, [])

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
