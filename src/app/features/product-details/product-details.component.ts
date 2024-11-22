import { Component, inject, OnInit } from '@angular/core';
import { NewProductsService } from '../../shared/Services/new-products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import { Product } from '../../shared/types/product-type';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [AsyncPipe, NgClass, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  private producsService = inject(NewProductsService);
  private activatedRoute = inject(ActivatedRoute);

  product$ = this.producsService.productById$;
  images: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.producsService.getProductById(id);
      }
    });

    this.product$.subscribe((product) => {
      if (product && product.images.length > 0) {
        this.changeMainImage(product.images[0]);
      }
    });
  }

  changeMainImage(img: string) {
    this.images = img;
  }

  addToCart(product: Product) {
    console.log(product);
  }
}
