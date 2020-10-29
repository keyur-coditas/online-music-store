import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from 'src/app/header/header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/shared/theme.service';
import { AppService } from 'src/app/shared/app.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import '../components';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StorybookMocks } from './mocks';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export default {
  title: 'Header Component',
  component: HeaderComponent,
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

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const LoggedIn = () => ({
  component: HeaderComponent,
  props: {
    isAuthenticated: () => true,
  },
});

export const LoggedOut = () => ({
  component: HeaderComponent,
  props: {
    isAuthenticated: () => false,
  },
});
