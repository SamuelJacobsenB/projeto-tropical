"use client";

import { useState } from "react";
import { useOrder } from "@/contexts";
import { Button, ConfirmOrderModal, OrderModal } from "..";

export const Order = () => {
  const [isVisibleOM, setIsVisibleOM] = useState(false);
  const [isVisibleCM, setIsVisibleCM] = useState(false);
  const { order, cancelOrder } = useOrder();

  if (!order || order.length === 0) {
    return null;
  }

  return (
    <>
      <OrderModal isVisible={isVisibleOM} setIsVisible={setIsVisibleOM} />
      <ConfirmOrderModal
        isVisible={isVisibleCM}
        setIsVisible={setIsVisibleCM}
      />
      <div className="fixed z-20 flex items-center justify-around bottom-0 w-screen h-20 bg-black opacity-60 rounded-t-3xl p-4">
        <Button
          onClick={cancelOrder}
          className="bg-black text-white hover:bg-zinc-950"
        >
          Cancelar pedido
        </Button>
        <Button
          onClick={() => setIsVisibleOM(true)}
          className="bg-black text-white hover:bg-zinc-950"
        >
          Gerenciar pedido
        </Button>
        <Button
          onClick={() => setIsVisibleCM(true)}
          className="bg-black text-white hover:bg-zinc-950"
        >
          Confirmar pedido
        </Button>
      </div>
    </>
  );
};
