"use client";

import { useProducts } from "@/hooks/useProducts";
import { useProductModal } from "@/contexts/productmodal.provider";
import Image from "next/image";
import { Template, LoadPage, ProductCard } from "@/components";

const HamburgueresPage = () => {
  const { data, isFetching, error } = useProducts("hamburguer");
  const { showProductModal } = useProductModal();

  if (isFetching) {
    return <LoadPage />;
  }

  if (error) {
    return <div>Erro ao carregar os produtos: {error.message}</div>;
  }

  return (
    <Template>
      <Image
        src="/hamburguer-slogan.jpg"
        alt="Imagem hambúrguer"
        width={1500}
        height={1500}
        className="flex w-full h-80 object-cover"
      />
      <h1 className="text-white text-3xl m-8">Hambúrgueres:</h1>
      <div className="flex flex-wrap gap-4 w-full p-4 justify-around">
        {data?.length === 0 && (
          <h2 className="text-lg text-white">
            Nenhum produto desta categoria foi cadastrado
          </h2>
        )}

        {data?.length !== undefined &&
          data.length > 0 &&
          data?.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              src={product.image}
              alt={product.name}
              onClick={() => showProductModal(product)}
            />
          ))}
      </div>
    </Template>
  );
};

export default HamburgueresPage;
