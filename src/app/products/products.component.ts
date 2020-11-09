import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Product, ProductOperationInfo } from '../shared/models/product';
import { CurrentUser } from '../shared/models/user';
import { AppState } from '../shared/store/app.state';
import * as ProductActions from '../shared/store/products/product.actions';
import * as APP_CONSTANTS from '../shared/app.constants';
import { ProductService } from './products.service';
import { Router } from '@angular/router';
import { StoreProduct } from '../shared/store/products/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: StoreProduct[];
  currentUser: any;
  constructor(
    private store: Store<AppState>,
    private productService:ProductService,
    private router: Router) { }
  

  ngOnInit(): void {
    this.store.dispatch(ProductActions.productFetchAttempt());

    this.store.pipe(
      map((state) => state['auth'].currentUser))
     .subscribe((data:CurrentUser) => {
      this.currentUser = data.email;
    });
    
    this.store.pipe(
      map((state) => state['products'].products)
    ).subscribe((data:StoreProduct[]) => {
      this.products = data;
    });

    
  }

  viewProduct(event: CustomEvent) {
    let productOpInfo: ProductOperationInfo = {
      productOperation: APP_CONSTANTS.PRODUCT_VIEW,
      disableFormFields: true
    }
    this.productService.setProductInfo(productOpInfo);
    this.productService.setProduct(event.detail.product);
    this.router.navigate(['products/product-update']);
  }

  updateProduct(event: CustomEvent) {
    event.stopPropagation();
    let productOpInfo: ProductOperationInfo = {
      productOperation: APP_CONSTANTS.PRODUCT_UPDATE,
      disableFormFields: false
    }
    this.productService.setProductInfo(productOpInfo);
    this.productService.setProduct(event.detail.product);
    this.router.navigate(['products/product-update']);
  }

  deleteProduct(event: CustomEvent) {
    event.stopPropagation();
    const product = event.detail.product;
    this.store.dispatch(ProductActions.productDeleteAttempt({product}));
  }
  
}
