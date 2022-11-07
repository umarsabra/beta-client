type OrderItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total_price: number;
  total_cost?: number;
  item_id?: number;
  order_id?: number;
};

export default OrderItem;
