"use client"

import { useOrders } from "@/hooks";
import { AdmTemplate, LoadPage } from "@/components";

const GerenciarPage = () => {
  const { data, isLoading, error } = useOrders();

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
    </AdmTemplate>
  );
};

export default GerenciarPage;
