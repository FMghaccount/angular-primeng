import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products: Observable<Product[]>;
  math = Math;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this.products = this.productService.getProducts();
  }

  clear(table: Table) {
    table.clear();
  }
}
