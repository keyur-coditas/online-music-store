import { createAction, props } from '@ngrx/store';
import {StoreProduct} from './products.model';

export const PRODUCT_FETCH_ATTEMPT = '[Product Page] products fetch Attempted';
export const PRODUCT_FETCH_SUCCESS = '[Product Page] products fetch Successful';
export const PRODUCT_FETCH_FAILURE = '[Product Page] products fetch Failure';

export const PRODUCT_ADD_ATTEMPT = '[Product Page] product add Attempted ';
export const PRODUCT_ADD_SUCCESS = '[Product Page] product add Successful ';
export const PRODUCT_ADD_FAILURE = '[Product Page] product add Failure ';

export const PRODUCT_UPDATE_ATTEMPT = '[Product Page] product update Attempted ';
export const PRODUCT_UPDATE_SUCCESS = '[Product Page] product update Successful ';
export const PRODUCT_UPDATE_FAILURE = '[Product Page] product update Failure ';

export const PRODUCT_DELETE_ATTEMPT = '[Product Page] product delete Attempted ';
export const PRODUCT_DELETE_SUCCESS = '[Product Page] product delete Successful ';
export const PRODUCT_DELETE_FAILURE = '[Product Page] product delete Failure ';

export const productAddAttempted = createAction(
  PRODUCT_ADD_ATTEMPT,
  props<{product: StoreProduct}>()
);

export const productAddSuccess = createAction(
  PRODUCT_ADD_SUCCESS,
  props<{product: StoreProduct}>()
);

export const productFetchAttempt = createAction(
    PRODUCT_FETCH_ATTEMPT
  );

  export const productFetchSuccess = createAction(
    PRODUCT_FETCH_SUCCESS,
    props<{products: StoreProduct[]}>()
  );  

  export const productUpdateAttempt = createAction(
    PRODUCT_UPDATE_ATTEMPT,
    props<{product: StoreProduct}>()
  ); 
  
  export const productUpdateSuccess = createAction(
    PRODUCT_UPDATE_SUCCESS
  );
  
  export const productUpdateFailure = createAction(
    PRODUCT_UPDATE_FAILURE
  ); 

  export const productDeleteAttempt = createAction(
    PRODUCT_DELETE_ATTEMPT,
    props<{product: StoreProduct}>()
  ); 

  export const productDeleteSuccess = createAction(
    PRODUCT_DELETE_SUCCESS,
    props<{product: StoreProduct}>()
  ); 