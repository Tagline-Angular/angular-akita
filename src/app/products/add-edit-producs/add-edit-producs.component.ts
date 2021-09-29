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
    this.productService.add(this.form.value);
  }
  cancel(){
    this.dialog.closeAll();
  }

}
