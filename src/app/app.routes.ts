import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { SupportComponent } from './features/support/support.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products.component').then(
        (products) => products.ProductsComponent
      ),
  },
  { path: 'products/product-details/:id', component: ProductDetailsComponent },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services.component').then(
        (service) => service.ServicesComponent
      ),
  },
  { path: 'support', component: SupportComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((auth) => auth.authRoutes),
  },
  { path: '**', component: NotFoundComponent },
];
