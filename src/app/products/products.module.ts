import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddEditProducsComponent } from './add-edit-producs/add-edit-producs.component';
import { MaterialModule } from '../material.module';
@NgModule({
  declarations: [ListProductsComponent, AddEditProducsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
