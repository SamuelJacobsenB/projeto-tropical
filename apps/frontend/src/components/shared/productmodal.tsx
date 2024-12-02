"use client";

import { useEffect, useState } from "react";
import { useMessage, useProductModal, useOrder } from "@/contexts";
import { I, Button, Quantity, ModalBox } from "@/components";

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
      addNewProduct(product, quantity);
      closeProductModal();
      showMessage("Produto adicionado", "success");
    }
  }

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  if (!product || product === null) {
    return null;
  }

  return (
    <ModalBox>
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
        <Quantity
          quantity={quantity}
          increment={increment}
          decrement={decrement}
        />
        <Button
          onClick={HandleAddProduct}
          className="bg-green-700 hover:bg-green-800 text-white"
        >
          Adicionar
        </Button>
      </span>
    </ModalBox>
  );
};
