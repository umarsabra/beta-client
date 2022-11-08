import React from "react";
import ItemsTable from "./ItemsTable";
import "./styles/Items.css";
import { items } from "../../data";
import ItemHeader from "./ItemHeader";

function Items() {
  return (
    <div className="items-view view">
      <ItemHeader />
      <ItemsTable items={items} />
    </div>
  );
}

export default Items;
