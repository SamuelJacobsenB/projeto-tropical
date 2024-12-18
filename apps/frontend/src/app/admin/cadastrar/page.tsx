"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMessage } from "@/contexts";
import { postProduct } from "@/functions";
import { FormPage, Input, Select } from "@/components";
import { Category } from "@/types";

const CadastrarPage = () => {
  const router = useRouter();
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

  async function handleSubmit() {
    try {
      if (category === "-- Escolha uma categoria --") {
        throw new Error();
      }

      const product = {
        name,
        price,
        description,
        image,
        category,
      };

      const response = await postProduct(product);

      if (response.error) {
        throw new Error();
      }

      router.push("/gerenciar");
      showMessage("Produto cadastrado com sucesso", "success");
    } catch {
      showMessage("Ocorreu um erro ao cadastrar o produto", "error");
    }
  }

  return (
    <FormPage
      title="Cadastrar novo pedido:"
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

export default CadastrarPage;
