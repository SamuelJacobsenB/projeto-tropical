"use client";

import { useOrderModal } from "@/contexts";
import { ModalBox, ProductCard, I } from "..";

export const OrderInfo = () => {
  const { order, obs, closeOrderModal } = useOrderModal();

  if (!order) {
    return null;
  }

  return (
    <ModalBox className="min-h-96 flex-col justify-between gap-2">
      <div className="flex justify-between items-center p-2 text-3xl">
        <h1>Pedido</h1>
        <button onClick={() => closeOrderModal()}>
          <I.Close />
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-around w-full min-h-96 overflow-auto p-2">
        {order.map((orderItem) => {
          const { product, quantity } = orderItem;

          return (
            <div
              className="flex flex-col items-center justify-cente gap-2 h-fit rounded p-2 text-white bg-light-primary"
              key={product.id}
            >
              <div className="flex w-full text-2xl">
                <h2>{product.name}</h2>
              </div>
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                src={product.image}
                alt={product.name}
              />
              <div className="bg-black rounded-full w-full h-8 text-lg text-center p-1">
                {quantity}
              </div>
            </div>
          );
        })}
      </div>
      {obs && (
        <div className="flex flex-col w-full p-2 bg-black text-white">
          <h3 className="text-2xl">Observação:</h3>
          <p className="text-lg text-justify ">{obs}</p>
        </div>
      )}
    </ModalBox>
  );
};
