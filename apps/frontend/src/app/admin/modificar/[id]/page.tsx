"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useMessage } from "@/contexts";
import { useOneProduct } from "@/hooks";
import { patchProduct } from "@/functions";
import { FormPage, Input, LoadPage, Select } from "@/components";
import { Category } from "@/types";

const ModificarIdPage = () => {
  const router = useRouter();
  const params = useParams();

  const id = params.id;
  const { data, isLoading, error } = useOneProduct(id as string);

  const { showMessage } = useMessage();

  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState<
    Category | "-- Escolha uma categoria --"
  >("-- Escolha uma categoria --");

  const categoryOptions = [
    {
      value: "-- Escolha uma categoria --",
      label: "-- Escolha uma categoria --",
    },
    { value: "hamburguer", label: "Hambúrguer" },
    { value: "sobremesa", label: "Sobremesa" },
    { value: "bebida", label: "Bebida" },
    { value: "porcao", label: "Porção" },
  ];

  useEffect(() => {
    if (data) {
      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
      setImage(data.image);
      setCategory(data.category);
    }
  }, [data]);

  async function handleSubmit() {
    try {
      if (category === "-- Escolha uma categoria --") {
        throw new Error();
      }

      const product = {
        id: id as string,
        name,
        price,
        description,
        image,
        category,
      };

      const response = await patchProduct(product);

      if (response.error) {
        throw new Error();
      }

      showMessage("Produto atualizado com sucesso", "success");
      router.push("/gerenciar");
    } catch {
      showMessage("Ocorreu um erro ao atualizar o produto", "error");
    }
  }

  if (isLoading) {
    return <LoadPage />;
  }

  if (error) {
    return <div>Erro ao carregar o produto: {error.message}</div>;
  }

  return (
    <FormPage
      title="Modificar pedido:"
      onSubmit={async () => await handleSubmit()}
    >
      <Input
        type="text"
        name="name"
        label="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do produto"
        minLength={0}
        required
      />
      <Input
        name="price"
        label="Preço"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Preço do produto"
        minLength={0}
        step="0.01"
        required
      />
      <Input
        name="description"
        label="Descrição"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição do produto"
        minLength={0}
        required
      />
      <Input
        name="image"
        label="Imagem"
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Imagem(url) do produto"
        minLength={0}
        required
      />
      <Select
        name="category"
        label="Categoria"
        options={categoryOptions}
        value={category}
        onChange={(e) => setCategory(e.target.value as Category)}
        required
      />
    </FormPage>
  );
};

export default ModificarIdPage;
