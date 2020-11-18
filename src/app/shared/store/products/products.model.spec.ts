import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { StoreProduct } from './products.model';

describe('Auth Effects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  test('productFetchSuccess reducer', () => {
      const productModel: StoreProduct = new StoreProduct();
    expect(productModel).toBeInstanceOf(StoreProduct);
  });

});
