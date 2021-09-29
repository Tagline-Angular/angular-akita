import { guid, ID } from '@datorama/akita';

export interface Product {
  id?: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image?: string
}

/**
 * A factory function that creates Product
 */
export function createProduct(params: Partial<Product>) {
  return {
    id: guid(),
    ...params,
  } as Product;
}
