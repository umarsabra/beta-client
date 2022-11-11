import Item from "../types/ItemType";

class ItemService {
    public static serviceURL = "http://192.168.1.108:8080/api/v1/items";

    public static async getItems(): Promise<Item[]>{
        const items = await fetch(this.serviceURL);
        return items.json();
    }
}

export default ItemService