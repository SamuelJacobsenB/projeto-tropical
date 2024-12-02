"use client";

import React from "react";
import { useOrder } from "@/contexts";
import { ModalBox, ProductCard, Quantity, I } from "..";
import { Product } from "@/types";

interface OrderModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OrderModal = ({ isVisible, setIsVisible }: OrderModalProps) => {
  const { order, value, removeProduct, setNewQuantity } = useOrder();

  function handleProductRemoved(product: Product) {
    removeProduct(product.id);

    if (!order) {
      setIsVisible(false);
    }
  }

  function increment(productId: string, quantity: number) {
    setNewQuantity(productId, quantity + 1);
  }

  function decrement(productId: string, quantity: number) {
    if (quantity > 1) {
      setNewQuantity(productId, quantity - 1);
    }
  }

  if (!isVisible || order === null || value === null) {
    return null;
  }

  return (
    <ModalBox className="min-h-96 flex-col justify-between gap-2">
      <div className="flex justify-between items-center p-2 text-3xl">
        <h1>Pedido</h1>
        <button onClick={() => setIsVisible(false)}>
          <I.Close />
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-around w-full min-h-96 overflow-auto p-2">
        {order.map((orderItem) => {
          const { product, quantity } = orderItem;
          console.log(order);

          return (
            <div
              className="flex flex-col items-center justify-center h-fit rounded p-2 text-white bg-light-primary"
              key={product.id}
            >
              <div className="flex justify-between w-full text-2xl">
                <h2>{product.name}</h2>
                <button onClick={() => handleProductRemoved(product)}>
                  <I.Close />
                </button>
              </div>
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                src={product.image}
                alt={product.name}
              />
              <Quantity
                quantity={quantity}
                increment={() => increment(product.id, quantity)}
                decrement={() => decrement(product.id, quantity)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center w-full h-10 bg-black">
        <h2 className="text-2xl text-white">
          Valor total: R$ {value.toFixed(2)}
        </h2>
      </div>
    </ModalBox>
  );
};
