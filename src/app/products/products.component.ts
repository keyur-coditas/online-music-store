import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Product } from '../shared/Models/product';
import * as ProductActions from '../shared/store/products/product.actions';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  currentUser: any;
  constructor(
    private store: Store<any>) { }
  
  ngOnInit(): void {
    this.currentUser = this.store.subscribe((data:any) => {
      this.currentUser = data.auth.currentUser;
    });
    this.store.dispatch(ProductActions.productFetchAttempt());
    this.store.subscribe((data) => {
      this.products = data.products.products;
    });
  }

}
