"use client";

import { useEffect, useState } from "react";
import { useMessage, useProductModal, useOrder } from "@/contexts";
import { I, Button, Quantity } from "@/components";

export const ProductModal = () => {
  const { showMessage } = useMessage();
  const { product, closeProductModal } = useProductModal();
  const { addNewProduct } = useOrder();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product || product === null) {
      setQuantity(1);
    }
  }, [product]);

  function HandleAddProduct() {
    if (product) {
      addNewProduct(product.id, quantity, product.price);
      closeProductModal();
      showMessage("Produto adicionado", "success");
    }
  }

  if (!product || product === null) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen p-4 fixed z-30 bg-black bg-opacity-80">
      <article className="flex flex-col max-w-2xl w-full bg-white overflow-hidden rounded-sm">
        <div
          className={`w-full h-96 p-4 bg-cover`}
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        >
          <div className="flex justify-between bg-white p-1 text-3xl">
            <h1>{product.name}</h1>
            <button onClick={closeProductModal}>
              <I.Close />
            </button>
          </div>
        </div>
        <p className="p-4 text-lg min-h-44">{product.description}</p>
        <big className="text-3xl m-2">R$ {product.price.toFixed(2)}</big>
        <span className="flex justify-between p-2">
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <Button
            onClick={HandleAddProduct}
            className="bg-green-700 hover:bg-green-800 text-white"
          >
            Adicionar
          </Button>
        </span>
      </article>
    </div>
  );
};
