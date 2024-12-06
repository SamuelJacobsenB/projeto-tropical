"use client";

import { useOrders } from "@/hooks";
import { AdmTemplate, LoadPage } from "@/components";
import { useModalOptions, useOrderModal } from "@/contexts";
import { deleteOrder } from "@/functions";
import { OrderItem } from "@/types";
import { OrderCard } from "@/components/shared/ordercard";

const GerenciarPage = () => {
  const { data, isLoading, error, refetch } = useOrders();
  const { showOrderModal } = useOrderModal();
  const { showModalOptions } = useModalOptions();

  function handleShowModal(unconvertedOrder: OrderItem[], obs?: string) {
    showOrderModal(unconvertedOrder, obs);
  }

  function handleDeleteOrder(orderId: string) {
    async function deleteTheOrder() {
      await deleteOrder(orderId);
      await refetch();
    }

    showModalOptions(
      "Você tem certeza de que quer confirmar este pedido?",
      async () => await deleteTheOrder()
    );
  }

  if (isLoading) {
    return <LoadPage />;
  }

  if (error) {
    return <h1>Houve um erro: {error.message}</h1>;
  }

  return (
    <AdmTemplate>
      <h1 className="text-white text-3xl m-8">Gerenciar pedidos:</h1>
      <h2 className="text-white text-xl text-center">
        Todos os pedidos listados abaixo:
      </h2>
      <div className="flex flex-wrap gap-4 w-full p-4 justify-around">
        {(!data || data.length === 0) && (
          <h2 className="text-lg text-white">
            Nenhum pedido foi cadastrado ainda
          </h2>
        )}

        {data &&
          data.length > 0 &&
          data.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              viewMore={handleShowModal}
              deleteOrder={handleDeleteOrder}
            />
          ))}
      </div>
    </AdmTemplate>
  );
};

export default GerenciarPage;
