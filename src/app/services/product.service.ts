import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'https://fakestoreapi.com/products?sort=desc'
    );
  }

  getProductsLazy(params?: any) {
    console.log(params);

    return this.http
      .get<Product[]>('https://fakestoreapi.com/products', {
        params: params,
      })
      .toPromise();
  }
}
