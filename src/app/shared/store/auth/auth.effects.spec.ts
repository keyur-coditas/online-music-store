import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as AuthActions from '../../../shared/store/auth/auth.actions';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { AuthEffects } from './auth.effects';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { AppMocks } from '../../mocks/mocks';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

describe('Auth Effects', () => {
  let store: MockStore;
  const initialState = {
    loggedIn: false,
  };

  let actions$ = new Observable<Action>();
  let effects: AuthEffects;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
        { provide: AuthenticationService, useValue: AppMocks.getMockAuthService() },
        { provide: Router, useValue: AppMocks.getMockRouterService() },
        { provide: ToastrService, useValue: AppMocks.getMockToastrService() },
        AuthEffects
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    effects = TestBed.inject(AuthEffects);
  });

  test('login attempt', () => {
    const authService = TestBed.inject(AuthenticationService);
    const loginSpy = spyOn(authService, 'login');
    actions$ = of({ type: AuthActions.LOGIN_ATTEMPT });
    effects.login.subscribe((actionResult) => {
        expect(loginSpy).toHaveBeenCalled();
    })
  });

  test('login success', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    actions$ = of({ type: AuthActions.LOGIN_SUCCESS });
    effects.loginSuccess.subscribe((actionResult) => {
        expect(navigateSpy).toHaveBeenCalled();
    })
  });


  test('login failure', () => {
    const toastr = TestBed.inject(ToastrService);
    const errorSpy = spyOn(toastr, 'error');
    actions$ = of({ type: AuthActions.LOGIN_FAILURE });
    effects.loginFailure.subscribe((actionResult) => {
        expect(errorSpy).toHaveBeenCalled();
    })
  });

  test('logout', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    actions$ = of({ type: AuthActions.LOGOUT });
    effects.logout.subscribe((actionResult) => {
        expect(navigateSpy).toHaveBeenCalled();
    })
  });

  test('signup attempt', () => {
    const authService = TestBed.inject(AuthenticationService);
    const registerSpy = spyOn(authService, 'register');
    actions$ = of({ type: AuthActions.SIGNUP_ATTEMPT });
    effects.signupAttempt.subscribe((actionResult) => {
        expect(registerSpy).toHaveBeenCalled();
    })
  });

  test('signup success', () => {
    const authService = TestBed.inject(ToastrService);
    const successSpy = spyOn(authService, 'success');
    actions$ = of({ type: AuthActions.SIGNUP_SUCCESS });
    effects.signupSuccess.subscribe((actionResult) => {
        expect(successSpy).toHaveBeenCalled();
    })
  });

  test('signup failure', () => {
    const authService = TestBed.inject(ToastrService);
    const errorSpy = spyOn(authService, 'error');
    actions$ = of({ type: AuthActions.SIGNUP_FAILURE });
    effects.signupFailure.subscribe((actionResult) => {
        expect(errorSpy).toHaveBeenCalled();
    })
  });

});
