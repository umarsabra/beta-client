import OrderItem, { OrderItemCreation } from "../../types/OrderItem";
import Order from "../../types/OrderType";

type Props = {
  order_item: OrderItem;
  setOrder: (order: Order) => void;
};

function CartItemRow(props: Props) {
  const deleteOrderItem = async (order_item_id: number) => {
    const URL =
      localStorage.getItem("API_URL") + `/orders/pending/${order_item_id}`;

    const updatedOrderReq = await fetch(URL, {
      method: "DELETE",
    });
    const updatedOrder: Order = updatedOrderReq.json() as unknown as Order;
    return updatedOrder;
  };

  console.log(props.order_item.barcode);

  const updateOrderItemReq = async (new_order_item: OrderItemCreation) => {
    const URL = localStorage.getItem("API_URL") + `/orders/pending`;
    const updatedOrderReq = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(new_order_item),
    });
    console.log(JSON.stringify(new_order_item));
    const updatedOrder: Order = updatedOrderReq.json() as unknown as Order;
    return updatedOrder;
  };

  const updateDeletedOrderItem = async (order_item_id: number) => {
    const order: Order = await deleteOrderItem(order_item_id);
    props.setOrder(order);
  };

  const updateOrderItem = async (new_order_item: OrderItemCreation) => {
    const order: Order = await updateOrderItemReq({
      barcode: new_order_item.barcode,
      quantity: new_order_item.quantity,
    });
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
