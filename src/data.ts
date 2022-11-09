import Item from "./types/ItemType";
import Order from "./types/OrderType";

export const items: Item[] = [
  {
    title: "لبن بخيره 500مل",
    quantity: 10,
    price: 7,
    cost_per_item: 3,
    total_cost: 50,
  },
  {
    title: "بيبسي 1 لتر",
    quantity: 10,
    price: 10,
    cost_per_item: 5,
    total_cost: 50,
  },
  {
    title: "لبن بخيره 500مل",
    quantity: 10,
    price: 7,
    cost_per_item: 3,
    total_cost: 50,
  },
  {
    title: "بيبسي 1 لتر",
    quantity: 10,
    price: 7,
    cost_per_item: 3,
    total_cost: 50,
  },
];

export const order: Order = {
  id: 1,
  total_price: 24,
  order_items: [
    {
      id: 1,
      title: "لبن بخيره 500مل",
      price: 7,
      quantity: 2,
      total_price: 14,
    },
    {
      id: 1,
      title: "لبن بخيره 500مل",
      price: 6,
      quantity: 1,
      total_price: 6,
    },
  ],
};
