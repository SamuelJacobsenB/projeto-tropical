"use client";

import { useMessage } from "@/contexts";
import { useAllProducts } from "@/hooks";
import { deleteProduct } from "@/functions";
import { AdmProductCard, AdmTemplate, LoadPage } from "@/components";

const ModificarPage = () => {
  const { showMessage } = useMessage();
  const { data, isLoading, error, refetch } = useAllProducts();

  async function handleDelete(productId: string) {
    const response = await deleteProduct(productId);

    if (response.error) {
      showMessage("Ocorreu um erro ao excluir o produto", "error");
      return;
    }

    showMessage("Produto excluído com sucesso", "success");
    await refetch();
  }

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

        {data &&
          data.length > 0 &&
          data.map((product) => (
            <AdmProductCard
              key={product.id}
              src={product.image}
              alt={product.name}
              name={product.name}
              href={`/admin/modificar/${product.id}`}
              onDelete={async () => await handleDelete(product.id)}
            />
          ))}
      </div>
    </AdmTemplate>
  );
};

export default ModificarPage;
