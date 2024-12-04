"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/services";
import { Category, Product } from "@/types/index";

export function useProducts(category: Category) {
  async function fetchData() {
    const response = await api.get(`/products/category/${category}`);
    return response.data as Product[];
  }

  return useQuery({
    queryKey: [category],
    queryFn: fetchData,
  });
}
