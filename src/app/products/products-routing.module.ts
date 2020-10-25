import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { ProductOperationsComponent } from './product-operations/product-operations.component';
import { ProductsComponent } from './products.component';


const routes: Routes = [
  {
    path: '', component: ProductsComponent, pathMatch: 'full'
  },
  {
    path: 'product-add', component: ProductOperationsComponent, pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: 'product-update', component: ProductOperationsComponent, pathMatch: 'full', canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
