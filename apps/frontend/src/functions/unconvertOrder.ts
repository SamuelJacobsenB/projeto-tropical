import { api } from "@/services";
import { Order, Product } from "@/types";

export function unconvertOrder(order: Order) {
  const productInfoList: string[] = order.productIds.split(",");

  const orderArray = productInfoList.map(async (productInfo) => {
    const [productId, quantity] = productInfo.split(":");

    const response = await api.get(`/products/${productId}`);
    const product = response.data as Product;

    if (product) {
      return {
        product,
        quantity: Number(quantity),
      };
    }
  });

  return orderArray;
}
