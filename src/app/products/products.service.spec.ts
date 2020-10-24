import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMocks } from '../shared/mocks/mocks';
import { ProductOperationInfo } from '../shared/models/product';
import { StoreProduct } from '../shared/store/products/products.model';
import { ProductService } from './products.service';

describe('ProductsService', () => {
  let component: ProductService;
  let fixture: ComponentFixture<ProductService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: HttpClient, useValue: AppMocks.getMockHttpService() },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    // fixture = TestBed.createComponent(ProductService)
    component = TestBed.inject(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAllProducts', () => {
    const dispatchSpy = spyOn(component['httpService'], 'get');
    component.getAllProducts();
    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('getProductInfo', () => {
    component.getProductInfo();
  });

  it('setProductInfo', () => {
    let productInfo:ProductOperationInfo = {
     disableFormFields: true,
     productOperation: ''
    }
    component.setProductInfo(productInfo);
  });

  it('addProduct', () => {
      const product:StoreProduct = {
          imageUrl:'',
          id: 1,
          price: 1,
          description: '',
          name: '',
          createdBy: ''
      } 
    const addSpy = spyOn(component['httpService'], 'post');
    component.addProduct(product);
    expect(addSpy).toHaveBeenCalled();
  });

  it('updateProduct', () => {
    const product:StoreProduct = {
        imageUrl:'',
        id: 1,
        price: 1,
        description: '',
        name: '',
        createdBy: ''
    } 
    const updateSpy = spyOn(component['httpService'], 'put');
    component.updateProduct(product);
    expect(updateSpy).toHaveBeenCalled();
  });

  it('deleteProduct', () => {
    const product:StoreProduct = {
        imageUrl:'',
        id: 1,
        price: 1,
        description: '',
        name: '',
        createdBy: ''
    }
    const deleteSpy = spyOn(component['httpService'], 'delete');
    component.deleteProduct(product);
    expect(deleteSpy).toHaveBeenCalled();
  });
  it('setProduct', () => {
    const product:StoreProduct = {
        imageUrl:'',
        id: 1,
        price: 1,
        description: '',
        name: '',
        createdBy: ''
    }
    component.setProduct(product);
  });
  it('getProduct', () => {
    component.getProduct();
  });
});
