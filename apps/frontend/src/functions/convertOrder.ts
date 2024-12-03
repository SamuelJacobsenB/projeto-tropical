import { OrderItem, Order } from "@/types";

export function convertOrder(
  orderItens: OrderItem[],
  table: number,
  value: number,
  obs?: string
): Order {
  const productIdsArray: string[] = [];

  orderItens.map((item) => {
    productIdsArray.push(`${item.product.id}:${item.quantity}`);
  });

  const productIds = productIdsArray.join(",");

  return {
    productIds,
    table,
    value,
    obs,
  };
}
