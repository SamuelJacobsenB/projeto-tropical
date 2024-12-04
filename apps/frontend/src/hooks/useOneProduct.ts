"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/services";
import { Product } from "@/types/index";

export function useOneProduct(productId: string) {
  async function fetchData() {
    const response = await api.get(`/products/${productId}`);
    return response.data as Product;
  }

  return useQuery({
    queryKey: [productId],
    queryFn: fetchData,
  });
}
