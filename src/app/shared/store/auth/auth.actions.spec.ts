import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as AuthActions from '../../../shared/store/auth/auth.actions';

describe('Auth Actions', () => {

  let store: MockStore;
  const initialState = { 
    loggedIn: false,
   };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({initialState})
      ],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });


  it('should create', () => {
    const data = {email: '', password: ''};
    store.dispatch(AuthActions.loginAttempted(data));
  });

  
});
