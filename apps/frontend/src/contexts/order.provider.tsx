"use client";

import React, { useState, useCallback, createContext, useContext } from "react";
import { OrderItem, Product } from "@/types";

interface OrderCtx {
  order: OrderItem[] | null;
  value: number | null;
  addNewProduct: (product: Product, quantity: number) => void;
  removeProduct: (productId: string) => void;
  setNewQuantity: (productId: string, quantity: number) => void;
  cancelOrder: () => void;
}

const OrderContext = createContext<OrderCtx>({} as OrderCtx);

interface ProductModalProviderProps {
  children: React.ReactNode;
}

export const OrderProvider = ({ children }: ProductModalProviderProps) => {
  const [order, setOrder] = useState<OrderItem[] | null>(null);
  const [value, setValue] = useState<number | null>(null);

  function calcValue(updatedOrder: OrderItem[]) {
    const newValue = updatedOrder.reduce(
      (acc, curr) => acc + curr.product.price * curr.quantity,
      0
    );

    return newValue;
  }

  const addNewProduct = useCallback(
    (product: Product, quantity: number) => {
      const ifProductExists = order?.find(
        (orderItem) => orderItem.product.id === product.id
      );

      if (ifProductExists && order) {
        const updatedOrder = order.map((orderItem) => {
          if (orderItem.product.id === product.id) {
            orderItem.quantity += quantity;
          }

          return orderItem;
        });

        setOrder(updatedOrder);
      } else {
        const newOrder: OrderItem = {
          product,
          quantity,
        };

        if (order && order !== null) {
          setOrder([...order, newOrder]);
        } else {
          setOrder([newOrder]);
        }
      }

      if (value !== null) {
        setValue(value + product.price * quantity);
      } else {
        setValue(product.price * quantity);
      }
    },
    [order, value]
  );

  const removeProduct = useCallback(
    (productId: string) => {
      if (order && order !== null) {
        const updatedOrder = order.filter(
          (item) => item.product.id !== productId
        );

        if (updatedOrder && updatedOrder.length > 0) {
          setValue(calcValue(updatedOrder));

          setOrder(updatedOrder);
        } else {
          setValue(null);
          setOrder(null);
        }
      }
    },
    [order]
  );

  const setNewQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (order && order !== null) {
        const updatedOrder = order.map((item) => {
          if (item.product.id == productId) {
            item.quantity = quantity;
          }

          return item;
        });

        setValue(calcValue(updatedOrder));

        setOrder(updatedOrder);
      }
    },
    [order]
  );

  const cancelOrder = useCallback(() => {
    setOrder(null);
    setValue(null);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        order,
        value,
        addNewProduct,
        removeProduct,
        setNewQuantity,
        cancelOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
