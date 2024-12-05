import { api } from "@/services";
import { Product } from "@/types";

export async function deleteProduct(productId: string) {
  try {
    const response = await api.delete(`/products/${productId}`);

    if (!response) {
      throw new Error();
    }

    return { data: response.data as Product };
  } catch {
    return { error: "Houve um erro ao deletar este produto" };
  }
}
