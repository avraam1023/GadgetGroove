import { Component, inject, OnInit } from '@angular/core';
import { NewProductsService } from '../../Services/new-products.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [ProductCardComponent, AsyncPipe],
  templateUrl: './new-products.component.html',
  styleUrl: './new-products.component.css',
})
export class NewProductsComponent implements OnInit {
  private newProductsService = inject(NewProductsService);
  newProducts$ = this.newProductsService.newProducts$;

  ngOnInit(): void {
    this.newProductsService.getNewProducts();
  }
}
