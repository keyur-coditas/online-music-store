import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from './user.model';

export interface AuthState {
    currentUser: User
}
export const initialState: AuthState = {
  currentUser: {
    accessToken: '',
    email: '',
    isLoggedIn: false
  }
};

const loginCompleteReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, payload:any) => {
      return {
          ...state,
          currentUser: {
            email: payload.payload.email,
            accessToken: payload.payload.accessToken,
            isLoggedIn: true
          }
      }
  }),

  on(AuthActions.logout, (state) => {
    return {
        ...state,
        currentUser: {
          email: '',
          accessToken: '',
          isLoggedIn: false
        }
    }
})
);



export function reducer(state: AuthState | undefined, action: Action) {
  return loginCompleteReducer(state, action);
}