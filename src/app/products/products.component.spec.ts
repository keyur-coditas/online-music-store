import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AppMocks } from '../shared/mocks/mocks';
import { ProductsComponent } from './products.component';
import { ProductService } from './products.service';
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
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
    dispatch: jest.fn(() => { })
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({ initialState }),
        { provide: ProductService, useValue: AppMocks.getMockProductService() },
        { provide: Router, useValue: AppMocks.getMockRouterService() },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
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
    const update = new CustomEvent('updateProduct', {
      detail: {
        product: {
          name: 'test',
          description: 'test',
          imageUrl: 'test',
          createdBy: 'test',
          price: 'test',
          id: 'test'
        }
      }
    });
    component.updateProduct(update);
    expect(setProductInfoSpy).toHaveBeenCalled();
    expect(setProductSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalled();
  });

  test('delete', () => {
    const deleteProduct = new CustomEvent('deleteProduct', {
      detail: {
        product: {
          name: 'test',
          description: 'test',
          imageUrl: 'test',
          createdBy: 'test',
          price: 'test',
          id: 'test'
        }
      }
    });
    component.deleteProduct(deleteProduct);
  });

  test('view', () => {
    const setProductSpy = spyOn(component['productService'], 'setProduct');
    const setProductInfoSpy = spyOn(component['productService'], 'setProductInfo');
    const navigateSpy = spyOn(component['router'], 'navigate');
    const viewProduct = new CustomEvent('viewProduct', {
      detail: {
        product: {
          name: 'test',
          description: 'test',
          imageUrl: 'test',
          createdBy: 'test',
          price: 'test',
          id: 'test'
        }
      }
    });
    component.viewProduct(viewProduct);
    expect(setProductInfoSpy).toHaveBeenCalled();
    expect(setProductSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalled();
  });
});

