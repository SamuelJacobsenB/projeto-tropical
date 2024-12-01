export interface OrderItem {
  productId: string;
  quantity: number;
}

export interface UnconvertedOrder {
  products: OrderItem[];
  table: number;
}

export interface Order {
  id: string;
  productIds: string;
  table: number;
}
