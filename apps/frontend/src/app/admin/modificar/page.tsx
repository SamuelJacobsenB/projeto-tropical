"use client";

import { useAllProducts } from "@/hooks";
import { AdmTemplate, LoadPage } from "@/components";

const ModificarPage = () => {
  const { data, isLoading, error } = useAllProducts();

  if (isLoading) {
    return <LoadPage />;
  }

  if (error) {
    return <h1>Houve um erro: {error.message}</h1>;
  }

  return (
    <AdmTemplate>
      <h1 className="text-white text-3xl m-8">Modificar Produtos:</h1>
      <h2 className="text-white text-xl text-center">
        Todos os produtos listados abaixo:
      </h2>
      <div className="flex flex-wrap gap-4 w-full p-4 justify-around">
        {(!data || data.length === 0) && (
          <h2 className="text-lg text-white">
            Nenhum produto foi cadastrado ainda
          </h2>
        )}

        {(data && data.length > 0) && data.map(product => (
            
        ))}
      </div>
    </AdmTemplate>
  );
};

export default ModificarPage;
