import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewProductsService } from '../../shared/Services/new-products.service';
import { BrandsService } from '../../shared/Services/brands.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, NgIf, NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(NewProductsService);
  private brandsService = inject(BrandsService);

  allProducts$ = this.productService.allProducts$;
  brands$ = this.brandsService.brands$;
  selectedBrands: string[] = [];

  ngOnInit(): void {
    this.productService.getAllProduct({ page_size: 40, page_index: 1 });
    this.brandsService.getBrands();

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['brands']) {
        this.selectedBrands = params['brands'].split(',');
      } else {
        this.selectedBrands = [];
      }
      this.fetchFilteredProducts();
    });
  }

  // toggleAllBrands(event: Event): void {
  //   const isChecked = (event.target as HTMLInputElement).checked;
  //   this.selectedBrands = isChecked ? [] : [];
  //   this.updateQueryParams();
  // }

  // toggleBrand(brand: string): void {
  //   if (this.selectedBrands.includes(brand)) {
  //     this.selectedBrands = this.selectedBrands.filter((b) => b !== brand);
  //   } else {
  //     this.selectedBrands.push(brand);
  //   }
  //   this.updateQueryParams();
  // }

  private updateQueryParams(): void {
    this.router.navigate([], {
      queryParams: { brands: this.selectedBrands.join(',') || null },
      queryParamsHandling: 'merge',
    });
    this.fetchFilteredProducts();
  }

  private fetchFilteredProducts(): void {
    const filter = {
      page_size: 40,
      page_index: 1,
      brands: this.selectedBrands,
    };
    this.productService.getAllProduct(filter);
  }

  // trackByProductId(index: number, product: any): string {
  //   return product._id;
  // }
}
