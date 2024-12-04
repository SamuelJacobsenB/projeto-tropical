import { api } from "@/services";
import { convertOrder } from "@/functions";
import { Order, OrderItem } from "@/types";

export async function postOrder(
  orderItens: OrderItem[],
  table: number,
  value: number,
  obs?: string
) {
  try {
    const order = convertOrder(orderItens, table, value, obs);

    const response = await api.post("/orders", order);

    if (!response) {
      throw new Error();
    }

    return { data: response.data as Order };
  } catch {
    return { error: "Houve um erro ao confirmar o pedido" };
  }
}
