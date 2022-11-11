import { OrderItemCreation } from "../types/OrderItem";
import Order from "../types/OrderType";

class OrderService {

    public static serviceURL = "http://192.168.1.108:8080/api/v1/orders";


    public static async getPendingOrder(): Promise<Order> {
        const pendingOrderRes = await fetch(this.serviceURL + "/pending");
        return pendingOrderRes.json();
    }

    public static async addOrderItem(order_item: OrderItemCreation): Promise<Order> {
        const addOrderItem = await fetch(this.serviceURL +  "/pending", {
            method: "POST",
            body: JSON.stringify(order_item),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const order: Order = addOrderItem.json() as unknown as Order;
          return order;
    }

    public static async updateOrderItem(new_order_item: OrderItemCreation): Promise<Order> {
        const updatedOrderReq = await fetch(this.serviceURL +  "/pending", {
          method: "POST",
          body: JSON.stringify(new_order_item),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const updatedOrder: Order = updatedOrderReq.json() as unknown as Order;
        return updatedOrder;
      };

    public static async deleteOrderItem(order_item_id: number): Promise<Order> {
        const updatedOrderReq = await fetch(this.serviceURL + `${order_item_id}`, {
          method: "DELETE",
        });
        const updatedOrder: Order = updatedOrderReq.json() as unknown as Order;
        return updatedOrder;
      };


}

export default OrderService;