"use client";

import { useState } from "react";
import { api } from "@/services";
import { convertOrder } from "@/functions";
import { OrderItem, Product } from "@/types";

export function useConfirmOrder() {
  const [error, setError] = useState<boolean | null>(null);

  async function postData(
    orderItens: OrderItem[],
    table: number,
    value: number,
    obs?: string
  ) {
    try {
      const order = convertOrder(orderItens, table, value, obs);

      const response = await api.post("/orders", order);
      return response.data as Product;
    } catch {
      setError(true);
    }
  }

  return { postData, error };
}
