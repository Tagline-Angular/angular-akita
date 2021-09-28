import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddEditProducsComponent } from './add-edit-producs/add-edit-producs.component';


@NgModule({
  declarations: [ListProductsComponent, AddEditProducsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
