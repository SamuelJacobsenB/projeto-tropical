import { api } from "@/services";
import { Order } from "@/types";

export async function deleteOrder(orderId: string) {
  try {
    const response = await api.delete(`/orders/${orderId}`);

    if (!response) {
      throw new Error();
    }

    return { data: response.data as Order };
  } catch {
    return { error: "Houve um erro ao confirmar este pedido" };
  }
}
