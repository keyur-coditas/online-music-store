import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as ProductActions from './product.actions';
import * as ProductReducer from './product.reducer';
import { StoreProduct } from './products.model';
describe('Auth Effects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
    }).compileComponents();
  });

  test('productFetchSuccess reducer', () => { 
    const product:StoreProduct[] = [
        {
            name: 'test',
            description: 'test',
            imageUrl: 'test',
            createdBy: 'test',
            price: 111,
            id: 1
        }
    ]
    const action = ProductActions.productFetchSuccess({products:product});
    const state = ProductReducer.reducer(ProductReducer.initialState, action);
  });

});
