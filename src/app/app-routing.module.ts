import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: 'auth',
   loadChildren: () => import('./auth/auth.module').then((mod) => mod.AuthModule),
  pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import ('./products/products.module').then((mod) => mod.ProductsModule)
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
