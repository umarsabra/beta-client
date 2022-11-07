import React from "react";

type Props = {
  total_price: number;
};

function CartSummary(props: Props) {
  return (
    <div className="cart-summary">
      <div className="order-summary">
        <li>الإجمالي</li>
        <h1>{props.total_price} EGP</h1>
      </div>
      <button className="pay-btn">ادفع</button>
    </div>
  );
}

export default CartSummary;
