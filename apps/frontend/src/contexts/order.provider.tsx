"use client";

import React, { useState, useCallback, createContext, useContext } from "react";
import { OrderItem } from "@/types";

interface OrderCtx {
  order: OrderItem[] | null;
  value: number | null;
  addNewProduct: (productId: string, quantity: number, _value: number) => void;
  cancelOrder: () => void;
}

const OrderContext = createContext<OrderCtx>({} as OrderCtx);

interface ProductModalProviderProps {
  children: React.ReactNode;
}

export const OrderProvider = ({ children }: ProductModalProviderProps) => {
  const [order, setOrder] = useState<OrderItem[] | null>(null);
  const [value, setValue] = useState<number | null>(null);

  const addNewProduct = useCallback(
    (productId: string, quantity: number, _value: number) => {
      const newOrder: OrderItem = {
        productId,
        quantity,
      };

      if (value !== null) {
        setValue(value + _value * quantity);
      } else {
        setValue(_value * quantity);
      }

      if (order && order !== null) {
        setOrder([...order, newOrder]);
      } else {
        setOrder([newOrder]);
      }
    },
    [order, value]
  );

  const cancelOrder = useCallback(() => {
    setOrder(null);
    setValue(null);
  }, []);

  return (
    <OrderContext.Provider value={{ order, value, addNewProduct, cancelOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
