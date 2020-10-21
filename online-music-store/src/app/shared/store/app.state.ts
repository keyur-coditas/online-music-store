import { createFeatureSelector } from '@ngrx/store';
import * as AuthReducer from './auth/auth.reducer';
import * as ProductsReducer from './products/product.reducer';


export interface AppState {
  authState: AuthReducer.AuthState;
  productsState: ProductsReducer.ProductsState;
}

export const reducers = {
  auth: AuthReducer.reducer,
  products: ProductsReducer.reducer
};


