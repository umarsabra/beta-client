type OrderItem = {
  id: number;
  barcode?: number;
  title: string;
  price: number;
  quantity: number;
  total_price: number;
  total_cost?: number;
  item_id?: number;
  order_id?: number;
};

export type OrderItemCreation = {
  barcode: number;
  quantity: number;
};

export default OrderItem;
