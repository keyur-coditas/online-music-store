import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/angular/types-6-0';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import '../../components';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StorybookMocks } from '../mocks';
import CardComponent from './card.component';
import { withKnobs, object } from '@storybook/addon-knobs';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export default {
  title: 'Card Component',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
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
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: Store, useValue: StorybookMocks.getstoreMock() },
        { provide: Router, useValue: StorybookMocks.getrouterMock() },
      ],
    }),
    withKnobs,
  ],
} as Meta;

const productData = {
  name: 'Laney, Acoustic Guitar Amp, 80W A1+',
  description:
    'The A1+ is designed to give the discerning acoustic player an amplified acoustic performance to match the tone and dynamics of the top acoustic instruments on the market.',
  price: 26460,
  imageUrl: '../../../assets/images/acoustic_amp.webp',
  createdBy: 'keyur@gmail.com',
  id: 7,
};

export const owner = () => ({
  component: CardComponent,
  props: {
    product: object('product', { ...productData }),
    currentUser: 'keyur@gmail.com',
    updateProduct: StorybookMocks.mockCardActions().updateProduct,
    deleteProduct: StorybookMocks.mockCardActions().deleteProduct,
    viewProduct: StorybookMocks.mockCardActions().viewProduct,
  },
});

export const nonOwner = () => ({
  component: CardComponent,
  props: {
    product: object('product', { ...productData }),
    currentUser: 'xyz@gmail.com',
    viewProduct: StorybookMocks.mockCardActions().viewProduct,
  },
});
