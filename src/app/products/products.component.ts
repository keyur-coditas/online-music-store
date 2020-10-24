import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Product } from '../shared/models/product';
import { AppState } from '../shared/store/app.state';
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
    private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.store.dispatch(ProductActions.productFetchAttempt());

    this.store.pipe(
      map((state) => state['auth'].currentUser))
     .subscribe((data:any) => {
      this.currentUser = data;
    });
    
    this.store.pipe(
      map((state) => state['products'].products)
    ).subscribe((data:any) => {
      this.products = data;
    });
  }

}
