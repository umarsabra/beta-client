import React from "react";

import Item from "../../types/ItemType";

function ItemRow(item: Item) {
  return (
    <div className="item-row table-row">
      <div className="title-cell">{item.title}</div>
      <div className="quantity-cell number-cell">{item.quantity}</div>
      <div className="price-cell number-cell">{item.price}</div>
      <div className="cost-per-item-cell number-cell">{item.cost_per_item}</div>
      <div className="total-cost-cell number-cell">{item.total_cost}</div>
    </div>
  );
}

export default ItemRow;
