type Item = {
  title: string;
  quantity: number;
  price: number;
  cost_per_item: number;
  total_cost: number;
};

export type ItemRequest = {
  barcode: number;
  title: string;
  unit_type: string;
  price_per_unit: number;
  quantity: number;
  cost_per_quantity: number;
  weight_per_quantity: number;
};

export default Item;
