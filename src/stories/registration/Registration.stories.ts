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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import RegistrationComponent from './registration.component';



function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export default {
  title: 'Register Component',
  component: RegistrationComponent,
  decorators: [
    moduleMetadata({
      declarations: [RegistrationComponent],
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
      ],
    }),
  ],
} as Meta;

const Template: Story<RegistrationComponent> = (args: RegistrationComponent) => ({
  component: RegistrationComponent,
  props: args,
});

export const defaultState = () => ({
  component: RegistrationComponent,
  props: {
    registrationForm: StorybookMocks.getMockRegistrationFormGroup(),
    onSubmit: StorybookMocks.mockRegistrationActions().onSubmit,
  },
});

