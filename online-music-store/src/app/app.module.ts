import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as AuthReducer from '../shared/Store/auth/auth.reducer';
import * as ProductsReducer from '../shared/Store/products/product.reducer';
import { AuthenticationService } from './auth/auth.service';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './products/card/card.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../shared/Store/auth/auth.effects';
import { ProductEffects } from '../shared/Store/products/product.effects';
import { ProductOperationsComponent } from './products/product-operations/product-operations.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools/src/instrument';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    ProductsComponent,
    CardComponent,
    ProductOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({auth: AuthReducer.reducer, products: ProductsReducer.reducer}),
    EffectsModule.forRoot([AuthEffects, ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
