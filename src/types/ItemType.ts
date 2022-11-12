

type Item = {
  title: string;
  quantity: number;
  price: number;
  cost_per_item: number;
  total_cost: number;
};

export type ItemRequest = {
  title: string;
  barcode: number;
  quantity: number;
  price: number;
  total_cost: number;
  is_weight_item: boolean;
}

export default Item;
