import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import '../../components';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StorybookMocks } from '../mocks';
import HeaderComponent from './header.component';



function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export default {
  title: 'Header Component',
  component: HeaderComponent,
  argTypes: {
    // creates a specific argType based on the iconMap object
    isAuthenticated: {
      control: {
        type: 'boolean',
        options: {isAuthenticated: true}
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
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
        { provide: Router, useValue: StorybookMocks.getrouterMock() }
      ],
    }),
  ],
} as Meta;

export const LoggedIn = () => ({
  component: HeaderComponent,
  props: {
    isAuthenticated: () => true,
    addProduct: StorybookMocks.mockHeaderActions().addProduct,
    logout:  StorybookMocks.mockHeaderActions().logout,
    changeLanguage: StorybookMocks.mockHeaderActions().changeLanguage,
    changeTheme:  StorybookMocks.mockHeaderActions().changeTheme
  },
  args: {
    
  }
});

export const LoggedOut = () => ({
  component: HeaderComponent,
  props: {
    isAuthenticated: () => false,
    addProduct: StorybookMocks.mockHeaderActions().addProduct,
    logout:  StorybookMocks.mockHeaderActions().logout,
    changeLanguage:  StorybookMocks.mockHeaderActions().changeLanguage,
    changeTheme:  StorybookMocks.mockHeaderActions().changeTheme
  },
});
