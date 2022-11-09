import OrderItem from "./OrderItem";

type Order = {
  id?: number;
  total_price: number;
  total_cost?: number;
  order_items: OrderItem[];
};

export default Order;
