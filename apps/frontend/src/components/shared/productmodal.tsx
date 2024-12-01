"use client";

import { useProductModal } from "@/contexts/productmodal.provider";
import { I, Button } from "@/components";

export const ProductModal = () => {
  const { name, price, description, image, closeProductModal } =
    useProductModal();

  if (!name || !price || !description || !image) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen p-4 absolute z-30 bg-black bg-opacity-80">
      <article className="flex flex-col max-w-2xl w-full bg-white overflow-hidden rounded-sm">
        <div
          className={`w-full h-96 p-4 bg-cover`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="flex justify-between bg-white p-1 text-3xl">
            <h1>{name}</h1>
            <button onClick={closeProductModal}>
              <I.Close />
            </button>
          </div>
        </div>
        <p className="p-4 text-lg min-h-44">{description}</p>
        <span className="flex justify-between p-2">
          <big className="text-3xl">R$ {price.toFixed(2)}</big>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            Adicionar
          </Button>
        </span>
      </article>
    </div>
  );
};
