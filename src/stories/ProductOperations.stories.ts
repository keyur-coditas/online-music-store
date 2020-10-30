import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import '../components';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StorybookMocks } from './mocks';
import ProductOperationsComponent from './product-operations.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';


function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export default {
  title: 'Product Card Component',
  component: ProductOperationsComponent,
  decorators: [
    moduleMetadata({
      declarations: [ProductOperationsComponent],
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
        { provide: Store, useValue: StorybookMocks.getstoreMock() },
        { provide: Router, useValue: StorybookMocks.getrouterMock() }
      ],
    }),
  ],
} as Meta;

const Template: Story<ProductOperationsComponent> = (args: ProductOperationsComponent) => ({
  component: ProductOperationsComponent,
  props: args,
});

export const addProduct = () => ({
  component: ProductOperationsComponent,
  props: {
    productForm:  StorybookMocks.getMockFormGroup(),
    name : {touched: false, invalid: false},
    price : {touched: false, invalid: false},
    imageUrlPreview: '',
    productOperationInfo: {
      productOperation: 'Add',
      disableFormFields: false,
    },
    buttonText: 'add-button',
    cancel: StorybookMocks.mockProductActions().cancel,
    onSubmit: StorybookMocks.mockProductActions().onSubmit,
    onImagePicked : StorybookMocks.mockProductActions().onImagePicked
  }, 
});

export const updateProduct = () => ({
  component: ProductOperationsComponent,
  props: {
    productForm: StorybookMocks.updateProuctFormGroup(),
    name:{touched: false, invalid: false},
    price:{touched: false, invalid: false},
    imageUrlPreview: '../../../assets/images/acoustic_amp.webp',
    productOperationInfo: {
      productOperation: 'Update',
      disableFormFields: false,
    },
    buttonText: 'update-button',
    cancel:  StorybookMocks.mockProductActions().cancel,
    onSubmit:  StorybookMocks.mockProductActions().onSubmit,
    onImagePicked :  StorybookMocks.mockProductActions().onImagePicked
  }, 
});

export const viewProduct = () => ({
  component: ProductOperationsComponent,
  props: {
    productForm: StorybookMocks.updateProuctFormGroup(),
    name:{touched: false, invalid: false},
    price:{touched: false, invalid: false},
    imageUrlPreview: '../../../assets/images/acoustic_amp.webp',
    productOperationInfo: {
      productOperation: 'View',
      disableFormFields: true,
    },
    buttonText: 'update-button',
    cancel:  StorybookMocks.mockProductActions().cancel,
    onSubmit:  StorybookMocks.mockProductActions().onSubmit,
    onImagePicked :  StorybookMocks.mockProductActions().onImagePicked
  }, 
});
