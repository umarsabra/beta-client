import React from "react";
import Button from "react-bootstrap/Button";

type Props = {
  total_price: number;
};

function CartSummary(props: Props) {
  return (
    <div className="cart-summary shadow-sm p-3 mb-5 bg-white rounded">
      <div className="order-summary">
        <li>الإجمالي</li>
        <h1>{props.total_price} EGP</h1>
      </div>
      <Button variant="success">ادفع</Button>
    </div>
  );
}

export default CartSummary;
