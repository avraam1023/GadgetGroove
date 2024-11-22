import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/product-type';
import { getProdutsResopnce } from '../types/response';
import { ProductQuery } from '../types/queryParams';

@Injectable({
  providedIn: 'root',
})
export class NewProductsService {
  private env = inject(ENVIRONMENT);
  private baseUrl = `${this.env.apiUrl}/shop/products`;
  private httpClient = inject(HttpClient);

  newProducts$ = new BehaviorSubject<Product[]>([]);
  allProducts$ = new BehaviorSubject<Product[]>([]);
  productById$ = new BehaviorSubject<Product | null>(null);

  getNewProducts() {
    return this.httpClient
      .get<getProdutsResopnce>(`${this.baseUrl}/all?page_size=4`)
      .subscribe((data) => {
        console.log(data);
        this.newProducts$.next(data.products);
      });
  }

  getProductById(id: string | null) {
    return this.httpClient
      .get<Product>(`${this.baseUrl}/id/${id}`)
      .subscribe((response) => {
        this.productById$.next(response);
        console.log(response);
      });
  }

  getAllProduct(query: ProductQuery) {
    return this.httpClient
      .get<getProdutsResopnce>(`${this.baseUrl}/search`, {
        params: { ...query },
      })
      .subscribe((response) => {
        this.allProducts$.next(response.products);
      });
  }
}
