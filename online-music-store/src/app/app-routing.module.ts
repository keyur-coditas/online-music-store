import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { ProductOperationsComponent } from './products/product-operations/product-operations.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent, pathMatch: 'full'
  },
  {
    path: 'products', component:ProductsComponent, pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: 'products/product-add', component: ProductOperationsComponent, pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: 'products/product-update', component: ProductOperationsComponent, pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
