"use client";

import Image from "next/image";
import { Template, ProductCard } from "@/components";
import { useProducts } from "@/hooks/useProducts";

const HamburgueresPage = () => {
  const { data, isFetching, error } = useProducts("hamburguer");

  if (isFetching) {
    return <div>Carregando...</div>;
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
      <div className="flex flex-wrap gap-4 w-full p-4 justify-around"></div>
    </Template>
  );
};

export default HamburgueresPage;
