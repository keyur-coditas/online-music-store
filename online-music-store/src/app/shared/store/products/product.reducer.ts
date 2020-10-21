import { Action, createReducer, on } from '@ngrx/store';
import { Product } from './products.model';
import * as ProductActions from '../products/product.actions';
import { state } from '@angular/animations';

export interface ProductsState {
    products: Product[]
}
export const initialState: ProductsState = {
    products: []
};

const productsReducer = createReducer(
  initialState,
  on(ProductActions.productAddSuccess, (state, payload:any) => {
    return {
        ...state,
        products: [...state.products, payload ]
    }
}),
on(ProductActions.productFetchSuccess, (state, payload:any) => {
  return {
      ...state,
      products: payload.payload.data
  }
}),
on(ProductActions.productUpdateSuccess, (state, payload:any) => {
  console.log('data ', payload);
  return {
      ...state,
      products: [...state.products, payload.payload.data]
  }
}),
on(ProductActions.productDeleteSuccess, (state, payload:any) => {
  console.log('data ', payload);
  return {
      
  }
})
);



export function reducer(state: ProductsState | undefined, action: Action) {
  return productsReducer(state, action);
}