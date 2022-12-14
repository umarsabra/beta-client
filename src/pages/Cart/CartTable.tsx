import React from "react";
import Order from "../../types/OrderType";

import CartItemRow from "./CartItemRow";

type Props = {
  order: Order;
  setOrder: (order: Order) => void;
};

function CartTable(props: Props) {
  return (
    <div className="cart-table table shadow-sm">
      <div className="cart-table-title table-title table-row">
        <div className="title-cell">العنوان</div>
        <div className="quantity-cell number-cell">الكمية</div>
        <div className="price-cell number-cell">السعر</div>
        <div className="total-price-cell number-cell">الإجمالي</div>
      </div>
      {props.order.order_items.length !== 0 ? (
        <div className="cart-table-content table-content">
          {props.order.order_items.map((order_item, index) => (
            <CartItemRow
              order_item={order_item}
              key={order_item.id}
              setOrder={props.setOrder}
            />
          ))}
        </div>
      ) : (
        <h1>not found</h1>
      )}
    </div>
  );
}

export default CartTable;
