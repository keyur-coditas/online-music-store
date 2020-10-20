import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent, pathMatch: 'full'
  },
  {
    path: 'products', component:ProductsComponent, pathMatch: 'full'
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
