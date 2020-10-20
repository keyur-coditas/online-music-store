import { createAction, props } from '@ngrx/store';
import {Product} from './products.model';

export const PRODUCT_FETCH_ATTEMPT = '[Product Page] products fetch Attempted';
export const PRODUCT_FETCH_SUCCESS = '[Product Page] products fetch Successful';
export const PRODUCT_FETCH_FAILURE = '[Product Page] products fetch Failure';
export const PRODUCT_ADD_ATTEMPT = '[Product Page] product add Attempted ';
export const PRODUCT_ADD_SUCCESS = '[Product Page] product add Successful ';
export const PRODUCT_ADD_FAILURE = '[Product Page] product add Failure ';
export const PRODUCT_UPDATE_ATTEMPT = '[Product Page] product update Attempted ';
export const PRODUCT_UPDATE_SUCCESS = '[Product Page] product update Successful ';
export const PRODUCT_UPDATE_FAILURE = '[Product Page] product update Failure ';

export const productAddAttempted = createAction(
  PRODUCT_ADD_ATTEMPT,
  props<{product: Product}>()
);

export const productAddSuccess = createAction(
  PRODUCT_ADD_SUCCESS,
  props<{product: Product}>()
);

export const productFetchAttempt = createAction(
    PRODUCT_FETCH_ATTEMPT
  );

  export const productFetchSuccess = createAction(
    PRODUCT_FETCH_ATTEMPT,
    props<{products: Product[]}>()
  );  