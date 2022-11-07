import React from "react";
import ItemsTable from "./ItemsTable";
import "./styles/Items.css";
import { items } from "../../data";

function Items() {
  return (
    <div className="items-view view">
      <ItemsTable items={items} />
    </div>
  );
}

export default Items;
