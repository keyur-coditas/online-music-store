import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AppMocks } from '../../shared/mocks/mocks';
import { ProductService } from '../products.service';
import { CardComponent } from './card.component';

xdescribe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let store: any;
  const initialState = {
    auth: {
      currentUser: {
        email: '',
        accessToken: ''
      }
    },
      products: {
        products: [{}]
      },
    dispatch: jest.fn(() => {})
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ProductService, useValue: AppMocks.getMockProductService() },
        { provide: Router, useValue: AppMocks.getMockRouterService() },
        provideMockStore({initialState}) 
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

});
