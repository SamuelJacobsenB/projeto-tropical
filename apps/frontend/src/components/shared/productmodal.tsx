"use client";

import { useProductModal } from "@/contexts/productmodal.provider";

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
          className={`w-full h-14 p-4 bg-cover`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <h1>{name}</h1>
          <button onClick={closeProductModal}>Fechar</button>
        </div>
        <p>{description}</p>
        <span>
          <big>R$ {price.toFixed(2)}</big>
        </span>
      </article>
    </div>
  );
};
