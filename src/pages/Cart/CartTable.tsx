import React from "react";
import Order from "../../types/OrderType";

import CartItemRow from "./CartItemRow";

type Props = {
  order: Order;
};

function CartTable(props: Props) {
  return (
    <div className="cart-table table">
      <div className="cart-table-title table-title table-row">
        <div className="title-cell">العنوان</div>
        <div className="quantity-cell number-cell">الكمية</div>
        <div className="price-cell number-cell">السعر</div>
        <div className="total-price-cell number-cell">الإجمالي</div>
      </div>
      <div className="cart-table-content table-content">
        {props.order.orderItems.map((orderItem, index) => (
          <CartItemRow {...orderItem} />
        ))}
      </div>
    </div>
  );
}

export default CartTable;
