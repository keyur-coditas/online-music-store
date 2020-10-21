import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppService } from '../shared/app.service';
import * as AuthActions from '../shared/store/auth/auth.actions';
import { ProductService } from '../products/products.service';
import * as APP_CONSTANTS from '../shared/app.constants';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(appService: AppService,
     private store: Store,
     private router:Router,
     private productService: ProductService,
     private themeService: ThemeService) {
   }

   ngOnInit(): void {
  }
  changeTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }
  addProduct() {
    this.productService.setProductOperation(APP_CONSTANTS.PRODUCT_ADD);
    this.router.navigate(['products/product-add'])
  }
  logout() {
    this.store.dispatch(AuthActions.logout());
  }

}
