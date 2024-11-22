import { Component, inject, Input } from '@angular/core';
import { Product } from '../../types/product-type';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  private rotuer = inject(Router);
  @Input({ required: true }) product!: Product;

  addToCart(product: Product) {
    console.log(product);
  }

  onNavigate(param: string) {
    this.rotuer.navigate(['/products/product-details'], {
      queryParams: {
        id: param,
      },
    });
  }
}
