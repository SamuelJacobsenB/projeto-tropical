"use client";

import React, { useState, useCallback, createContext, useContext } from "react";
import { OrderItem } from "@/types";

interface OrderModal {
  order: OrderItem[] | null;
  obs: string | null;
  showOrderModal: (_order: OrderItem[], obs?: string) => void;
  closeOrderModal: () => void;
}

const OrderModalContext = createContext<OrderModal>({} as OrderModal);

interface OrderModalProviderProps {
  children: React.ReactNode;
}

export const OrderModalProvider = ({ children }: OrderModalProviderProps) => {
  const [order, setOrder] = useState<OrderItem[] | null>(null);
  const [obs, setObs] = useState<string | null>(null);

  const showOrderModal = useCallback(
    async (_order: OrderItem[], obs?: string) => {
      setOrder(_order);
      setObs(obs ? obs : null);
    },
    []
  );

  const closeOrderModal = useCallback(() => {
    setOrder(null);
  }, []);

  return (
    <OrderModalContext.Provider
      value={{
        order,
        obs,
        showOrderModal,
        closeOrderModal,
      }}
    >
      {children}
    </OrderModalContext.Provider>
  );
};

export const useOrderModal = () => useContext(OrderModalContext);
