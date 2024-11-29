import React from "react";
import Image from "next/image";
import { Template, ProductCard } from "@/components";

const HamburgueresPage = () => {
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
        <ProductCard
          src="https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hambúrguer"
          name="Humbúrguer 1"
          price={59.9}
        />
        <ProductCard
          src="https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hambúrguer"
          name="Humbúrguer 1"
          price={59.9}
        />
        <ProductCard
          src="https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hambúrguer"
          name="Humbúrguer 1"
          price={59.9}
        />
        <ProductCard
          src="https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hambúrguer"
          name="Humbúrguer 1"
          price={59.9}
        />
      </div>
    </Template>
  );
};

export default HamburgueresPage;
