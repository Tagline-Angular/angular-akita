import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditProducsComponent } from './add-edit-producs/add-edit-producs.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent
  },
  {
    path: 'add',
    component: AddEditProducsComponent
  },
  {
    path: 'edit/:id',
    component: AddEditProducsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
