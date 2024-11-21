import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/product-type';
import { getProdutsResopnce } from '../types/response';

@Injectable({
  providedIn: 'root',
})
export class NewProductsService {
  private env = inject(ENVIRONMENT);
  private baseUrl = `${this.env.apiUrl}/shop/products`;
  private httpClient = inject(HttpClient);

  newProducts$ = new BehaviorSubject<Product[]>([]);

  getNewProducts() {
    return this.httpClient
      .get<getProdutsResopnce>(`${this.baseUrl}/all?page_size=4`)
      .subscribe((data) => {
        console.log(data);
        this.newProducts$.next(data.products);
      });
  }
}
