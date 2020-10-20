import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { User } from '../../shared/Store/auth/user.model';
import { Product } from '../../shared/Models/product';
import { ProductService } from './products.service';
import * as ProductActions from '../../shared/Store/products/product.actions';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  currentUser: any;
  constructor(
    private productsService: ProductService,
    private store: Store<any>) { }
  
  ngOnInit(): void {
    this.currentUser = this.store
    .subscribe((data:any) => {
      this.currentUser = data.auth.currentUser;
    });
    this.store.dispatch(ProductActions.productFetchAttempt());
    this.store.subscribe((data) => {
      console.log('val ', data);
    })
  }

}
