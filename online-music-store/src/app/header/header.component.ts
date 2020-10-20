import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppService } from '../../shared/app.service';
import { BaseClass } from '../../shared/baseClass';
import * as AuthActions from '../../shared/Store/auth/auth.actions';
import { ProductService } from '../products/products.service';
import * as APP_CONSTANTS from '../../shared/app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseClass implements OnInit {

  constructor(appService: AppService,
     private store: Store,
     private router:Router,
     private productService: ProductService) {
    super(appService);
   }

   ngOnInit(): void {
  }
  changeTheme() {
    this.appService.changeTheme(this.theme);
  }
  addProduct() {
    this.productService.setProductOperation(APP_CONSTANTS.PRODUCT_ADD);
    this.router.navigate(['products/product-add'])
  }
  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  ngOnDestroy(): void {
    this.destroyThemeSubscription();
  }
}
