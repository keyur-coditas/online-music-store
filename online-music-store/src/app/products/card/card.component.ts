import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/Models/product';
import { ProductService } from '../products.service';
import * as APP_CONSTANTS from '../../shared/app.constants';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../shared/store/products/product.actions';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product;
  currentUser: any = ''
  constructor(private productService:ProductService,
    private router: Router,
    private store: Store) { }

  ngOnInit(): void {
     this.store.subscribe((data:any) => {
      this.currentUser = data.auth.currentUser.email;
      console.log("data", this.currentUser, this.product);
    })
  }

  updateProduct() {
    this.productService.setProductOperation(APP_CONSTANTS.PRODUCT_UPDATE);
    this.productService.setProduct(this.product);
    this.router.navigate(['products/product-update']);
  }
  deleteProduct() {
    const product = this.product;
    this.store.dispatch(ProductActions.productDeleteAttempt({product}))
  }
  viewProduct() {
    this.productService.setProductOperation(APP_CONSTANTS.PRODUCT_VIEW);
    this.productService.setProduct(this.product);
    this.router.navigate(['products/product-update']);
  }
}
