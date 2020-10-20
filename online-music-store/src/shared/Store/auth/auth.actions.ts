import { createAction, props } from '@ngrx/store';

export const LOGIN_ATTEMPT = '[Login Page] Login Attempted';
export const LOGIN_SUCCESS = '[Login Page] Login Successful';
export const LOGIN_FAILURE = '[Login Page] Login Failure';
export const LOGOUT = '[Header Page] Logout';

export const loginAttempted = createAction(
  LOGIN_ATTEMPT,
  props<{email:string; password: string}>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{email:string; accessToken:string;}>()
);

export const loginFailure = createAction(
  LOGIN_FAILURE
);

export const logout = createAction(
  LOGOUT
);
  