import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { ProductStore } from './product.store';
import { createProduct, Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private productStore: ProductStore, private http: HttpClient) {}

  get() {
    this.http
      .get('https://fakestoreapi.com/products')
      .subscribe((entities: any) => this.productStore.set(entities));
  }

  add(product: Product) {
    const prod = createProduct(product);
    console.log('prod ::  ==>', prod);
    this.productStore.add(prod);
  }

  update(product: Partial<Product>) {
    this.productStore.update(product);
  }

  // remove(id: ID) {
  //   this.productStore.remove(id);
  // }
}
