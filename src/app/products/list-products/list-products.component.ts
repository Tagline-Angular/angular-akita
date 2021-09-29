import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddEditProducsComponent } from '../add-edit-producs/add-edit-producs.component';
import { Product } from '../state/product.model';
import { ProductQuery } from '../state/product.query';
import { ProductService } from '../state/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  displayedColumns: string[] = ['id', 'title', 'price', 'category'];

  constructor(
    private productQuery: ProductQuery,
    private productService: ProductService,
    public dialog: MatDialog
  ) {
    this.products$ = this.productQuery.selectAll();
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts(): void {
    this.productService.get();
  }

  addProduct() {
    const dialogRef = this.dialog.open(AddEditProducsComponent, {
      width: '640px',
      disableClose: true,
    });
  }
}
