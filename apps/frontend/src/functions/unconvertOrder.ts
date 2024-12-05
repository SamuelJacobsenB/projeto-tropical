import { api } from "@/services";
import { Order, OrderItem, Product } from "@/types";

export function unconvertOrder(order: Order): OrderItem[] {
  const productInfoList: string[] = order.productIds.split(",");

  const orderArray: OrderItem[] = [];

  productInfoList.map(async (productInfo) => {
    const [productId, quantity] = productInfo.split(":");

    const response = await api.get(`/products/${productId}`);
    const product = response.data as Product;

    if (product) {
      orderArray.push({
        product,
        quantity: Number(quantity),
      });
    }
  });

  return orderArray;
}
