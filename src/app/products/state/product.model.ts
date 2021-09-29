import { ID } from '@datorama/akita';

export interface Product {
  id: ID;
}

/**
 * A factory function that creates Product
 */
export function createProduct(params: Partial<Product>) {
  return {

  } as Product;
}
