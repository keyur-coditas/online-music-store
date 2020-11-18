import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as AuthActions from '../../../shared/store/auth/auth.actions';
import * as AuthReducer from './auth.reducer';
describe('Auth Effects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
    }).compileComponents();
  });

  test('login success reducer', () => {
    const user = {
      email: 'test@gmail.com',
      accessToken: '123',
    };
    const action = AuthActions.loginSuccess(user);
    const state = AuthReducer.reducer(AuthReducer.initialState, action);
    expect(state).toEqual({
        ...AuthReducer.initialState,
        currentUser: {
            email: user.email,
            accessToken: user.accessToken,
            isLoggedIn: true
          }
    });
  });


  test('logout reducer', () => {
    const action = AuthActions.logout();
    const state = AuthReducer.reducer(AuthReducer.initialState, action);
    expect(state).toEqual({
        ...AuthReducer.initialState,
        currentUser: {
            email: '',
            accessToken: '',
            isLoggedIn: false
          }
    });
  });

});
