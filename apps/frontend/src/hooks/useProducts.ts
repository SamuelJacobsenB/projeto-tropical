"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { Category } from "@/types/index";

export function useProducts(category: Category) {
  async function fetchData() {
    const products = await api.get(`/products/category/${category}`);
    return products;
  }

  return useQuery({
    queryKey: ["hamburgueres"],
    queryFn: fetchData,
  });
}
