import { Component, Input, OnInit } from '@angular/core';
import { ProductOperationInfo } from '../../shared/models/product';
import { ProductService } from '../products.service';
import * as APP_CONSTANTS from '../../shared/app.constants';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../shared/store/products/product.actions';
import { map } from 'rxjs/operators';
import { CurrentUser } from '../../shared/models/user';
import { StoreProduct } from 'src/app/shared/store/products/products.model';
import { AppState } from 'src/app/shared/store/app.state';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: StoreProduct;
  currentUser: string = '';
  constructor(private productService:ProductService,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit(): void {
     this.store.pipe(
      map((state) => state['auth'].currentUser))
     .subscribe((user:CurrentUser) => {
      this.currentUser = user.email;
    })
  }

  updateProduct(evt) {
    evt.stopPropagation();
    let productOpInfo: ProductOperationInfo = {
      productOperation: APP_CONSTANTS.PRODUCT_UPDATE,
      disableFormFields: false
    }
    this.productService.setProductInfo(productOpInfo);
    this.productService.setProduct(this.product);
    this.router.navigate(['products/product-update']);
  }
  deleteProduct(evt) {
    evt.stopPropagation();
    const product = this.product;
    this.store.dispatch(ProductActions.productDeleteAttempt({product}))
  }
  viewProduct() {
    let productOpInfo: ProductOperationInfo = {
      productOperation: APP_CONSTANTS.PRODUCT_VIEW,
      disableFormFields: true
    }
    this.productService.setProductInfo(productOpInfo);
    this.productService.setProduct(this.product);
    this.router.navigate(['products/product-update']);
  }
}
