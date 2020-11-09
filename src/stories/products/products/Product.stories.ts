import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import '../../../components';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StorybookMocks } from '../../mocks';
import ProductsComponent from './products.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../../app/products/card/card.component';
import { object, withKnobs } from '@storybook/addon-knobs';
import { StoreProduct } from '../../../app/shared/store/products/products.model';
import { provideMockStore } from '@ngrx/store/testing';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
const initialState = { 
  auth: {
    currentUser: {
      accessToken: '123',
      email: 'xyz@gmail.com',
      isLoggedIn: false
    }
  },
  dispatch: () => {},
  pipe: () => {},
 };
export default {
  title: 'Products Component',
  component: ProductsComponent,
  decorators: [
    moduleMetadata({
      declarations: [ProductsComponent, CardComponent],
      imports: [
        CommonModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
          defaultLanguage: 'en',
        }),
        StoreModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({initialState}),
        { provide: Router, useValue: StorybookMocks.getrouterMock() }
      ],
    }),
    withKnobs
  ],
} as Meta;

const productData:StoreProduct[] = [
  {
    name: 'test',
  description: 'test',
  imageUrl: '../../../assets/images/chateau_acoustic_guitar.webp',
  createdBy: 'xyz@gmail.com',
  price: 1000,
  }
]

export const defaultState = () => ({
  component: ProductsComponent,
  props: {
    products: object('products',  [...productData])
  }, 
});


