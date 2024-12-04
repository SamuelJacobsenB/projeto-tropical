import { api } from "@/services";
import { Product, Category } from "@/types";

interface PartialProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
}

export async function postProduct(product: PartialProduct) {
  try {
    const response = await api.post("/products", product);

    if (!response) {
      throw new Error();
    }

    return { data: response.data as Product };
  } catch {
    return { error: "Houve um erro ao cadastrar este produto" };
  }
}
