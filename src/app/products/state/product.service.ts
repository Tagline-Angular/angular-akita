import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductStore } from './product.store';
import { createProduct, Product } from './product.model';
import { MatDialog } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(
    private productStore: ProductStore,
    private http: HttpClient,
    public dialog: MatDialog
  ) {}

  get() {
    this.http
      .get('https://fakestoreapi.com/products')
      .subscribe((entities: any) => this.productStore.set(entities));
  }

  add(product: Product) {
    this.http.post('https://fakestoreapi.com/products', product).subscribe(
      (response: any) => {
        const prod = createProduct(response);
        this.productStore.add(prod);
        this.dialog.closeAll();
      },
      (err) => {
        console.log('err ::  ==>', err);
        this.dialog.closeAll();
      }
    );
  }

  update(product: Partial<Product>) {
    this.productStore.update(product);
  }

  // remove(id: ID) {
  //   this.productStore.remove(id);
  // }
}
