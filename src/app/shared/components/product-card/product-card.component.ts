import { Component, Input } from '@angular/core';
import { Product } from '../../types/product-type';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  addToCart(product: Product) {
    console.log(product);
  }
}
