import { createAction, props } from '@ngrx/store';

export const LOGIN_ATTEMPT = '[Login Page] Login Attempted';
export const LOGIN_SUCCESS = '[Login Page] Login Successful';
export const LOGIN_FAILURE = '[Login Page] Login Failure';
export const LOGOUT = '[Header Page] Logout';
export const SIGNUP_ATTEMPT = '[Login Page] Signup Attempted';
export const SIGNUP_SUCCESS = '[Login Page] Signup Successful';
export const SIGNUP_FAILURE = '[Login Page] Signup Failure';

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
  
export const signup = createAction(
  SIGNUP_ATTEMPT,
  props<{email:string; password:string;}>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{email:string; password:string;}>()
);

export const signupFailure = createAction(
  SIGNUP_FAILURE
);