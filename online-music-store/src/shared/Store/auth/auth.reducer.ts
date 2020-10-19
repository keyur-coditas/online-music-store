import { Action, createReducer, on } from '@ngrx/store';
import * as LoginPageActions from './auth.actions';

export interface State {
    isLoggedIn: boolean
}
export const initialState: State = {
  isLoggedIn: false
};

const loginCompleteReducer = createReducer(
  initialState,
  on(LoginPageActions.loginComplete, (state) => {
      return {
          ...state,
          isLoggedIn: true
      }
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return loginCompleteReducer(state, action);
}