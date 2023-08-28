import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnChanges {
  @Input('showDialog') showDialog: boolean;
  @Input('selectedProduct') selectedProduct: Product;
  @Input('id') id: number;
  @Output('closeDialog') closeDialog = new EventEmitter<boolean>();
  @Output('showToast') showToast = new EventEmitter<{
    id: number;
    create: boolean;
  }>();

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnChanges() {
    if (this.selectedProduct) {
      this.productForm.patchValue(this.selectedProduct);
    } else {
      this.productForm.reset();
    }
  }
  productForm = this.fb.group({
    title: ['', Validators.required],
    price: [1, Validators.required],
    description: ['', [Validators.required, Validators.min(1)]],
    category: ['', Validators.required],
    image: ['', Validators.required],
  });

  closeModal() {
    this.productForm.reset();
    this.closeDialog.emit();
  }

  sendRequest() {
    if (this.selectedProduct) {
      this.http
        .patch(
          'https://fakestoreapi.com/products/7',
          JSON.stringify(this.productForm.value)
        )
        .subscribe((data: { id: number }) => {
          this.showToast.emit({ id: this.id, create: false });
        });
      this.productForm.reset();
      this.closeDialog.emit();
    } else {
      this.http
        .post(
          'https://fakestoreapi.com/products',
          JSON.stringify(this.productForm.value)
        )
        .subscribe((data: { id: number }) => {
          this.showToast.emit({ id: data.id, create: true });
        });
    }
  }
}
