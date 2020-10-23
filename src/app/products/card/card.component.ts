import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/Models/product';
import { ProductService } from '../products.service';
import * as APP_CONSTANTS from '../../shared/app.constants';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../shared/store/products/product.actions';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product;
  currentUser: any = ''
  disableFormFields
  constructor(private productService:ProductService,
    private router: Router,
    private store: Store) { }

  ngOnInit(): void {
     this.store.pipe(
      map((state) => state['auth'].currentUser))
     .subscribe((data:any) => {
      this.currentUser = data.email;
    })
  }

  updateProduct(evt) {
    evt.stopPropagation();
    let productOpInfo = {
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
  viewProduct(evt) {

    let productOpInfo = {
      productOperation: APP_CONSTANTS.PRODUCT_VIEW,
      disableFormFields: true
    }
    this.productService.setProductInfo(productOpInfo);
    this.productService.setProduct(this.product);
    this.router.navigate(['products/product-update']);
  }
}
