import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppService } from '../shared/app.service';
import * as AuthActions from '../shared/store/auth/auth.actions';
import { ProductService } from '../products/products.service';
import * as APP_CONSTANTS from '../shared/app.constants';
import { ThemeService } from '../shared/theme.service';
import { ProductOperationInfo } from '../shared/models/product';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
     private appService: AppService,
     private store: Store,
     private router:Router,
     private productService: ProductService,
     private themeService: ThemeService,
     private translateService:TranslateService) {
      this.translateService.addLangs(['en', 'fr']);
      this.translateService.setDefaultLang('en');
  
      const browserLang = this.translateService.getBrowserLang();
      this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   }

  changeTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }

  addProduct() {
    const productOp:ProductOperationInfo = {
      productOperation:APP_CONSTANTS.PRODUCT_ADD,
      disableFormFields: false
    }
    this.productService.setProductInfo(productOp);
    this.router.navigate(['products/product-add'])
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  isAuthenticated() {
    return this.appService.isAuthenticated();
  }

  changeLanguage() {
    const currenLang = this.translateService.currentLang;
    if(currenLang === 'en') {
      this.translateService.use('fr');
    } else {
      this.translateService.use('en');
    }
  }
}
