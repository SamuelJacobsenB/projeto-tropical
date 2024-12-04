import { api } from "@/services";
import { Product } from "@/types";

export async function patchProduct(product: Product) {
  try {
    const response = await api.patch(`/products/${product.id}`, product);

    if (!response) {
      throw new Error();
    }

    return { data: response.data as Product };
  } catch {
    return { error: "Houve um erro ao atualizar este produto" };
  }
}
