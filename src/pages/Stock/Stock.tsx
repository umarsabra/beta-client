import React, { useEffect, useState } from "react";
import ItemsTable from "./ItemsTable";
import "./styles/Items.css";
import ItemHeader from "./ItemHeader";
import Item from "../../types/ItemType";
import ItemService from "../../services/ItemService";

function Stock() {
  const [items, setItems] = useState<Item[]>([])

  useEffect(()=>{
  const getItems =async () => {
    const items: Item[] = await ItemService.getItems();
    setItems(items)
  }
  getItems()


  }, [])

  return (
    <div className="items-view view">
      <ItemHeader />
      <ItemsTable items={items} />
    </div>
  );
}

export default Stock;
