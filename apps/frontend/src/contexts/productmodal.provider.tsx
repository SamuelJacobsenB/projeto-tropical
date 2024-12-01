"use client";

import React, { useState, useCallback, createContext, useContext } from "react";
import { Product } from "@/types";

interface ProductModal {
  product: Product | null;
  showProductModal: (_product: Product) => void;
  closeProductModal: () => void;
}

const ProductModalContext = createContext<ProductModal>({} as ProductModal);

interface ProductModalProviderProps {
  children: React.ReactNode;
}

export const ProductModalProvider = ({
  children,
}: ProductModalProviderProps) => {
  const [product, setProduct] = useState<Product | null>(null);

  const showProductModal = useCallback((_product: Product) => {
    setProduct(_product);
  }, []);

  const closeProductModal = useCallback(() => {
    setProduct(null);
  }, []);

  return (
    <ProductModalContext.Provider
      value={{
        product,
        showProductModal,
        closeProductModal,
      }}
    >
      {children}
    </ProductModalContext.Provider>
  );
};

export const useProductModal = () => useContext(ProductModalContext);
