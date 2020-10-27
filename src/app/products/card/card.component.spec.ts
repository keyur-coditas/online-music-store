import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppMocks } from '../../shared/mocks/mocks';
import { ProductService } from '../products.service';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
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
        provideMockStore({initialState}),
        TranslateService 
      ],
      imports: [TranslateModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.product =  {
      name: 'string',
      description: 'string',
      imageUrl: 'string',
      createdBy: 'string',
      price: 123,
      id: 123
    }
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('update', () => {
    const setProductSpy = spyOn(component['productService'], 'setProduct');
    const setProductInfoSpy = spyOn(component['productService'], 'setProductInfo');
    const navigateSpy = spyOn(component['router'], 'navigate');
    const evt = {
      stopPropagation: () => {}
    }
    component.updateProduct(evt);
    expect(setProductInfoSpy).toHaveBeenCalled();
    expect(setProductSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalled();
  });

  test('delete', () => {
    const evt = {
      stopPropagation: () => {}
    }
    component.deleteProduct(evt);
  });
  
  test('view', () => {
    const setProductSpy = spyOn(component['productService'], 'setProduct');
    const setProductInfoSpy = spyOn(component['productService'], 'setProductInfo');
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.viewProduct();
    expect(setProductInfoSpy).toHaveBeenCalled();
    expect(setProductSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalled();
  });
});
