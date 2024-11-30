import React, { useState, useCallback, createContext, useContext } from "react";

interface ProductModal {
  name: string | null;
  price: number | null;
  description: string | null;
  image: string | null;
  showProductModal: (
    name: string,
    price: number,
    description: string,
    image: string
  ) => void;
  closeProductModal: () => void;
}

const ProductModalContext = createContext<ProductModal>({} as ProductModal);

interface ProductModalProviderProps {
  children: React.ReactNode;
}

export const ProductModalProvider = ({
  children,
}: ProductModalProviderProps) => {
  const [name, setName] = useState<string | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const showProductModal = useCallback(
    (name: string, price: number, description: string, image: string) => {
      setName(name);
      setPrice(price);
      setDescription(description);
      setImage(image);
    },
    []
  );

  const closeProductModal = useCallback(() => {
    setName(null);
    setPrice(null);
    setDescription(null);
    setImage(null);
  }, []);

  return (
    <ProductModalContext.Provider
      value={{
        name,
        price,
        description,
        image,
        showProductModal,
        closeProductModal,
      }}
    >
      {children}
    </ProductModalContext.Provider>
  );
};

export const useProductModal = () => useContext(ProductModalContext);
