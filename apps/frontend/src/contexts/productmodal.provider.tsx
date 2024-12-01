"use client";

import React, { useState, useCallback, createContext, useContext } from "react";
import { OrderItem, Product } from "@/types";

interface ProductModal {
  product: Product | null;
  order: OrderItem[] | null;
  value: number | null;
  showProductModal: (_product: Product) => void;
  closeProductModal: () => void;
  addNewProduct: (productId: string, quantity: number, _value: number) => void;
  cancelOrder: () => void;
}

const ProductModalContext = createContext<ProductModal>({} as ProductModal);

interface ProductModalProviderProps {
  children: React.ReactNode;
}

export const ProductModalProvider = ({
  children,
}: ProductModalProviderProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [order, setOrder] = useState<OrderItem[] | null>(null);
  const [value, setValue] = useState<number | null>(null);

  const showProductModal = useCallback((_product: Product) => {
    setProduct(_product);
  }, []);

  const closeProductModal = useCallback(() => {
    setProduct(null);
  }, []);

  const addNewProduct = useCallback(
    (productId: string, quantity: number, _value: number) => {
      const newOrder: OrderItem = {
        productId,
        quantity,
      };

      if (value !== null) {
        setValue(value + _value * quantity);
      } else {
        setValue(_value * quantity);
      }

      if (order && order !== null) {
        setOrder([...order, newOrder]);
      } else {
        setOrder([newOrder]);
      }

      closeProductModal();
    },
    [closeProductModal, order, value]
  );

  const cancelOrder = useCallback(() => {
    setOrder(null);
    setValue(null);
  }, []);

  return (
    <ProductModalContext.Provider
      value={{
        product,
        order,
        value,
        showProductModal,
        closeProductModal,
        addNewProduct,
        cancelOrder,
      }}
    >
      {children}
    </ProductModalContext.Provider>
  );
};

export const useProductModal = () => useContext(ProductModalContext);
