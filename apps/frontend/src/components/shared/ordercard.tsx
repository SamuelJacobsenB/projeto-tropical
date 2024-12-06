"use client";

import { useState, useEffect } from "react";
import { unconvertOrder } from "@/functions";
import { Button } from "..";
import { Order, OrderItem } from "@/types";

interface OrderCardProps {
  order: Order;
  viewMore: (order: OrderItem[], obs?: string) => void;
  deleteOrder: (orderId: string) => void;
}

export const OrderCard = ({ order, viewMore, deleteOrder }: OrderCardProps) => {
  const [unconvertedOrder, setUnconvertedOrder] = useState<OrderItem[]>([]);

  useEffect(() => {
    const unconverted = unconvertOrder(order);

    setUnconvertedOrder(unconverted);
  }, [order]);

  return (
    <div className="flex flex-col w-96 bg-primary shadow-lg rounded p-2">
      <div className="flex justify-between w-full text-white text-2xl">
        <h3>Mesa: {order.table}</h3>
        <p>R$ {order.value.toFixed(2)}</p>
      </div>
      <div className="flex w-full gap-2 text-white">
        <Button
          className="flex-1 bg-blue-600 hover:bg-blue-700"
          onClick={() => viewMore(unconvertedOrder, order.obs)}
        >
          Ver detalhes
        </Button>
        <Button
          className="flex-1 bg-green-700 hover:bg-green-800"
          onClick={() => deleteOrder(order.id as string)}
        >
          Fechar
        </Button>
      </div>
    </div>
  );
};
