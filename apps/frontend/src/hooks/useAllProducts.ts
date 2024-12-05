"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/services";
import { Product } from "@/types/index";

export function useAllProducts() {
  async function fetchData() {
    const response = await api.get(`/products`);
    return response.data as Product[];
  }

  return useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });
}
