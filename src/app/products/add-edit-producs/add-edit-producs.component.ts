import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../state/product.service';

@Component({
  selector: 'app-add-edit-producs',
  templateUrl: './add-edit-producs.component.html',
  styleUrls: ['./add-edit-producs.component.scss'],
})
export class AddEditProducsComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog, 
    private productService: ProductService,) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submit(){
    console.log('this.form.value ::  ==>' , this.form.value);
    this.productService.add(this.form.value);

    // const product: Product = {
    //   title: 'test product',
    //   price: 13.5,
    //   description: 'lorem ipsum set',
    //   category: 'electronic',
    // };
    // this.productService.add(product);

  }
  cancel(){
    this.dialog.closeAll();
  }

}
