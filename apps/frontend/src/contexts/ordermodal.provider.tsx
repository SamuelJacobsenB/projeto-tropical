"use client";

import React, { useState, useCallback, createContext, useContext } from "react";
import { unconvertOrder } from "@/functions";
import { Order, OrderItem } from "@/types";

interface OrderModal {
  order: OrderItem[] | null;
  showOrderModal: (_order: Order) => void;
  closeOrderModal: () => void;
}

const OrderModalContext = createContext<OrderModal>({} as OrderModal);

interface OrderModalProviderProps {
  children: React.ReactNode;
}

export const OrderModalProvider = ({ children }: OrderModalProviderProps) => {
  const [order, setOrder] = useState<OrderItem[] | null>(null);

  const showOrderModal = useCallback(async (_order: Order) => {
    const unconvertedOrder = unconvertOrder(_order);
    console.log(unconvertedOrder);
    setOrder(unconvertedOrder);
  }, []);

  const closeOrderModal = useCallback(() => {
    setOrder(null);
  }, []);

  return (
    <OrderModalContext.Provider
      value={{
        order,
        showOrderModal,
        closeOrderModal,
      }}
    >
      {children}
    </OrderModalContext.Provider>
  );
};

export const useOrderModal = () => useContext(OrderModalContext);
