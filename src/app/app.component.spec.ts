import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [ ],
    providers: [],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
  });
});

describe('AppComponent', () => {
  it('should render the component', async () => {
     render(AppComponent);
  });
});