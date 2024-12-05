"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/services";
import { Order } from "@/types/index";

export function useOrders() {
  async function fetchData() {
    const response = await api.get("/orders");
    return response.data as Order[];
  }

  return useQuery({
    queryKey: ["orders"],
    queryFn: fetchData,
    staleTime: 1000 * 60,
  });
}
