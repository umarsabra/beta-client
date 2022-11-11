import OrderService from "../../services/OrderService";
import OrderItem, { OrderItemCreation } from "../../types/OrderItem";
import Order from "../../types/OrderType";

type Props = {
  order_item: OrderItem;
  setOrder: (order: Order) => void;
};

function CartItemRow(props: Props) {

  const updateDeletedOrderItem = async (order_item_id: number) => {
    const order: Order = await OrderService.deleteOrderItem(order_item_id);
    props.setOrder(order);
  };

  const updateOrderItem = async (new_order_item: OrderItemCreation) => {
    const payload: OrderItemCreation = {
      barcode: new_order_item.barcode,
      quantity: new_order_item.quantity,
    }
    const order: Order = await OrderService.updateOrderItem(payload);
    props.setOrder(order);
  };

  return (
    <div className="cart-item-row table-row">
      <div className="title-cell">{props.order_item.title}</div>
      <div className="quantity-cell number-cell">
        <input
          type="number"
          min={1}
          defaultValue={props.order_item.quantity}
          onChange={(e) =>
            updateOrderItem({
              barcode: props.order_item.barcode as number,
              quantity: Number(e.target.value),
            })
          }
        />
        <button
          className="remove-btn"
          onClick={() => updateDeletedOrderItem(props.order_item.id)}
        >
          حذف
        </button>
      </div>
      <div className="price-cell number-cell">{props.order_item.price}</div>
      <div className="total-cost-cell number-cell">
        {props.order_item.total_price}
      </div>
    </div>
  );
}

export default CartItemRow;
