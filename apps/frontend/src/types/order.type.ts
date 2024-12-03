import { Product } from ".";

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id?: string;
  productIds: string;
  table: number;
  obs?: string;
}
