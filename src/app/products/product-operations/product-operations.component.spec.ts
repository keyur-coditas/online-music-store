import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AppMocks } from '../../shared/mocks/mocks';
import { ProductService } from '../products.service';
import { ProductOperationsComponent } from './product-operations.component';

xdescribe('ProductOperationsComponent', () => {
  let component: ProductOperationsComponent;
  let fixture: ComponentFixture<ProductOperationsComponent>;
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
      declarations: [ ProductOperationsComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ProductService, useValue: AppMocks.getMockProductService() },
        { provide: Router, useValue: AppMocks.getMockRouterService() },
         provideMockStore({initialState})
      ],
      imports: [ ReactiveFormsModule, FormsModule]
    }).compileComponents();  
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
