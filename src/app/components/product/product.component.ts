import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class ProductComponent {
  products: Observable<Product[]>;
  math = Math;
  id: number;
  selectedProduct: Product;
  showDialog: boolean = false;
  constructor(
    private productService: ProductService,
    private toast: MessageService,
    private http: HttpClient,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this.products = this.productService.getProducts();
  }

  clear(table: Table) {
    table.clear();
  }

  showAddDialog() {
    this.showDialog = true;
    this.selectedProduct = null;
  }

  showToast(data: { id: number; create: boolean }) {
    if (data.create === true) {
      this.toast.add({
        severity: 'success',
        summary: 'Success',
        detail: `Product-${data.id} created successfully`,
      });
    } else {
      this.toast.add({
        severity: 'success',
        summary: 'Success',
        detail: `Product-${data.id} updated successfully`,
      });
    }
  }

  removeProduct(id?: number) {
    this.http
      .delete('https://fakestoreapi.com/products/6')
      .subscribe((data) => {
        console.log(data);

        this.toast.add({
          severity: 'success',
          summary: 'Success',
          detail: `Product-${id} removed successfully`,
        });
      });
  }

  updateProduct(product: Product) {
    this.id = product.id;
    this.selectedProduct = product;
    this.showDialog = true;
  }

  confirm(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // this.toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.removeProduct(id);
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.toast.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.toast.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }

  closeModal() {
    this.showDialog = false;
    this.selectedProduct = null;
  }
}
