"use client";

import { useProductModal } from "@/contexts/productmodal.provider";
import { Button } from "..";

export const Order = () => {
  const { order, cancelOrder } = useProductModal();

  if (!order || order.length === 0) {
    return null;
  }

  return (
    <div className="fixed z-20 flex items-center bottom-0 w-screen h-16 bg-black opacity-60 rounded-t-3xl p-4">
      <Button
        onClick={cancelOrder}
        className="bg-black text-white hover:bg-zinc-950"
      >
        Cancelar pedido
      </Button>
    </div>
  );
};
