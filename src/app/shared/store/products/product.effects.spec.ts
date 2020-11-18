import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as ProductActions from './product.actions';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { AppMocks } from '../../mocks/mocks';
import { Router } from '@angular/router';
import { ProductEffects } from './product.effects';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/products/products.service';

describe('Auth Effects', () => {
  let store: MockStore;
  const initialState = {
    loggedIn: false,
  };

  let actions$ = new Observable<Action>();
  let effects: ProductEffects;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
        { provide: ProductService, useValue: AppMocks.getMockProductService() },
        { provide: Router, useValue: AppMocks.getMockRouterService() },
        { provide: ToastrService, useValue: AppMocks.getMockToastrService() },
        ProductEffects
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    effects = TestBed.inject(ProductEffects);
  });

  test('product add attempt', () => {
    const authService = TestBed.inject(ProductService);
    const navigateSpy = spyOn(authService, 'addProduct');
    actions$ = of({ type: ProductActions.PRODUCT_ADD_ATTEMPT });
    effects.productAddAttempt.subscribe((action) => {
        expect(navigateSpy).toHaveBeenCalled();
    })
  });

  test('product add success', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    actions$ = of({ type: ProductActions.PRODUCT_ADD_SUCCESS });
    effects.productAddSuccess.subscribe((action) => {
        expect(navigateSpy).toHaveBeenCalled();
    })
  });

  test('product fetch attempt', () => {
    const authService = TestBed.inject(ProductService);
    const navigateSpy = spyOn(authService, 'getAllProducts');
    actions$ = of({ type: ProductActions.PRODUCT_FETCH_ATTEMPT });
    effects.productsFetchAttempt.subscribe((action) => {
        expect(navigateSpy).toHaveBeenCalled();
    })
  });

  test('product update attempt', () => {
    const authService = TestBed.inject(ProductService);
    const navigateSpy = spyOn(authService, 'updateProduct');
    actions$ = of({ type: ProductActions.PRODUCT_UPDATE_ATTEMPT });
    effects.productsUpdateAttempt.subscribe((action) => {
        expect(navigateSpy).toHaveBeenCalled();
    })
  });

  test('product update success', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    actions$ = of({ type: ProductActions.PRODUCT_UPDATE_SUCCESS });
    effects.productsUpdateSuccess.subscribe((action) => {
        expect(navigateSpy).toHaveBeenCalled();
    })
  });

  test('product update failure', () => {
    const router = TestBed.inject(Router);
    const authService = TestBed.inject(ToastrService);
    const successSpy = spyOn(authService, 'error');
    const navigateSpy = spyOn(router, 'navigate');
    actions$ = of({ type: ProductActions.PRODUCT_UPDATE_FAILURE });
    effects.productsUpdateFailure.subscribe((action) => {
        expect(navigateSpy).toHaveBeenCalled();
        expect(successSpy).toHaveBeenCalled();
    })
  });

  test('product delete attempt', () => {
    const authService = TestBed.inject(ProductService);
    const navigateSpy = spyOn(authService, 'deleteProduct');
    actions$ = of({ type: ProductActions.PRODUCT_DELETE_ATTEMPT });
    effects.productsDeleteAttempt.subscribe((action) => {
        expect(navigateSpy).toHaveBeenCalled();
    })
  });


  test('product delete success', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    actions$ = of({ type: ProductActions.PRODUCT_DELETE_SUCCESS });
    effects.productsDeleteSuccess.subscribe((action) => {
    })
  });


  test('product delete failure', () => {
    const authService = TestBed.inject(ToastrService);
    const successSpy = spyOn(authService, 'error');
    actions$ = of({ type: ProductActions.PRODUCT_DELETE_FAILURE });
    effects.productsDeleteFailure.subscribe((action) => {
        expect(successSpy).toHaveBeenCalled();
    })
  });

});
