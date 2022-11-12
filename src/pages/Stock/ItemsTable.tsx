import React from "react";

import Item from "../../types/ItemType";
import ItemRow from "./ItemRow";

type Props = {
  items: Item[];
};

function ItemsTable(props: Props) {
  return (
    <div className="items-table table">
      <div className="items-table-title table-row table-title">
        <div className="title-cell">العنوان</div>
        <div className="quantity-cell number-cell">الكمية</div>
        <div className="price-cell number-cell">السعر</div>
        <div className="cost-per-item-cell number-cell">تكلفة القطعة</div>
        <div className="total-cost-cell number-cell">إجمالي التكلفه</div>
      </div>
      <div className="items-table-content table-content">
        {props.items.map((item, index) => (
          <ItemRow {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ItemsTable;
