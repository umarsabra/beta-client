import OrderItem from "../../types/OrderItem";

function CartItemRow(order_item: OrderItem) {
  return (
    <div className="cart-item-row table-row">
      <div className="title-cell">{order_item.title}</div>
      <div className="quantity-cell number-cell">
        <input type="number" min={1} defaultValue={order_item.quantity} />
        <button className="remove-btn">حذف</button>
      </div>
      <div className="price-cell number-cell">{order_item.price}</div>
      <div className="total-cost-cell number-cell">
        {order_item.total_price}
      </div>
    </div>
  );
}

export default CartItemRow;
