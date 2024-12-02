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

  const addNewProduct = useCallback(
    (product: Product, quantity: number) => {
      const newOrder: OrderItem = {
        product,
        quantity,
      };

      if (value !== null) {
        setValue(value + product.price * quantity);
      } else {
        setValue(product.price * quantity);
      }

      if (order && order !== null) {
        setOrder([...order, newOrder]);
      } else {
        setOrder([newOrder]);
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
          setValue(
            updatedOrder.reduce(
              (acc, curr) => acc + curr.product.price * curr.quantity,
              0
            )
          );

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

        setValue(
          updatedOrder.reduce(
            (acc, curr) => acc + curr.product.price * curr.quantity,
            0
          )
        );

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
