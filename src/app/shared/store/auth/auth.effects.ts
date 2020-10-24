import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { catchError, mergeMap, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../../../auth/auth.service';
import * as AuthActions from './auth.actions';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private router: Router,
    private authService: AuthenticationService,
    private toastrService: ToastrService
  ) {}

  login = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActions.LOGIN_ATTEMPT),
      mergeMap((action: any) =>
        this.authService.login(action).pipe(
          map((data: any) => {
            let email = action.email;
            let accessToken = data.accessToken;
            return {
              type: AuthActions.LOGIN_SUCCESS,
              email,
              accessToken
            };
          }),
          catchError((error) => of({ type: AuthActions.LOGIN_FAILURE }))
        )
      )
    );
  });

  loginSuccess = createEffect(
    () => {
      return this.actions.pipe(
        ofType(AuthActions.LOGIN_SUCCESS),
        tap((action: any) => {
          sessionStorage.setItem('accessToken', action.accessToken);
          this.router.navigate(['products']);
        })
      );
    },
    { dispatch: false }
  );

  loginFailure = createEffect(
    () => {
      return this.actions.pipe(
        ofType(AuthActions.LOGIN_FAILURE),
        tap((action) => {
          this.toastrService.error('Couldnot login');
          sessionStorage.clear();
        })
      );
    },
    { dispatch: false }
  );

  logout = createEffect(
    () => {
      return this.actions.pipe(
        ofType(AuthActions.LOGOUT),
        tap((action) => {
          sessionStorage.clear();
          this.router.navigate(['auth']);
        })
      );
    },
    { dispatch: false }
  );

  signupAttempt = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActions.SIGNUP_ATTEMPT),
      mergeMap((action: any) =>
        this.authService.register(action).pipe(
          map((data: any) => {
            let email = action.email;
            let accessToken = data.accessToken;
            return {
              type: AuthActions.SIGNUP_SUCCESS,
              payload: { email, accessToken },
            };
          }),
          catchError((error) => of({ type: AuthActions.SIGNUP_FAILURE }))
        )
      )
    );
  });

  signupSuccess = createEffect(
    () => {
      return this.actions.pipe(
        ofType(AuthActions.SIGNUP_SUCCESS),
        tap((action) => {
          this.toastrService.success('Registered!');
        })
      );
    },
    { dispatch: false }
  );

  signupFailure = createEffect(
    () => {
      return this.actions.pipe(
        ofType(AuthActions.SIGNUP_FAILURE),
        tap((action) => {
          this.toastrService.error('Couldnot register');
          sessionStorage.clear();
        })
      );
    },
    { dispatch: false }
  );
}
