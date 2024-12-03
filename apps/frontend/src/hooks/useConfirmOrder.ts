"use client";

import { useMutation } from "@tanstack/react-query";
import { api } from "@/services";
import { convertOrder } from "@/functions";
import { OrderItem, Product } from "@/types";

export function useConfirmOrder(
  orderItens: OrderItem[],
  table: number,
  obs?: string
) {
  async function postData() {
    const order = convertOrder(orderItens, table, obs);

    const response = await api.post("/products", order);
    return response.data as Product;
  }

  return useMutation({
    mutationKey: ["useConfirmOrder"],
    mutationFn: postData,
  });
}
