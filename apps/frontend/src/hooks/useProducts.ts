"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { Category, Product } from "@/types/index";

export function useProducts(category: Category) {
  async function fetchData() {
    const response = await api.get(`/products/category/${category}`);
    return response.data as Product[];
  }

  return useQuery({
    queryKey: ["hamburgueres"],
    queryFn: fetchData,
  });
}
