import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppMocks } from '../../shared/mocks/mocks';
import { ProductService } from '../products.service';
import { ProductOperationsComponent } from './product-operations.component';
import * as APP_CONSTANTS from '../../shared/app.constants';
import { StoreProduct } from 'src/app/shared/store/products/products.model';

describe('ProductOperationsComponent', () => {
  let component: ProductOperationsComponent;
  let fixture: ComponentFixture<ProductOperationsComponent>;
  let store: any;
  const initialState = {
    auth: {
      currentUser: {
        email: '',
        accessToken: '',
      },
    },
    products: {
      products: [{}],
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductOperationsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ProductService, useValue: AppMocks.getMockProductService() },
        { provide: Router, useValue: AppMocks.getMockRouterService() },
        provideMockStore({ initialState }),
        TranslateService,
      ],
      imports: [ReactiveFormsModule, FormsModule, TranslateModule.forRoot()],
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
  test('createFormGroup', () => {
    component.createProductFormGroup();
  });
  test('cancel', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.cancel();
    expect(navigateSpy).toHaveBeenCalled();
  });
  test('setButtonText', () => {
    component.productOperationInfo = {
      productOperation: APP_CONSTANTS.PRODUCT_ADD,
      disableFormFields: false,
    };
    component.setButtonText();
    component.productOperationInfo = {
      productOperation: APP_CONSTANTS.PRODUCT_UPDATE,
      disableFormFields: false,
    };
    component.setButtonText();
  });
  test('createFormGroup', () => {
    component.createProductFormGroup();
  });
  test('nameValueChanged', () => {
    const inputValueChanged = new CustomEvent('inputValueChanged', {
      detail: {
        value: 'test',
      },
    });
    component.nameValueChanged(inputValueChanged);
  });
  test('priceValueChanged', () => {
    const inputValueChanged = new CustomEvent('inputValueChanged', {
      detail: {
        value: 'test',
      },
    });
    component.priceValueChanged(inputValueChanged);
  });
  test('descriptionValueChanged', () => {
    const inputValueChanged = new CustomEvent('inputValueChanged', {
      detail: {
        value: 'test',
      },
    });
    component.descriptionValueChanged(inputValueChanged);
  });

  test('initializeFormData', () => {
    component.selectedProduct = {
      name: 'test',
      description: 'test',
      imageUrl: 'test',
      createdBy: 'test',
      price: 111,
      id: 1,
    };
    component.initializeFormData();
  });

  test('onImagePicked', () => {
    component.path = '';
    const event = {
      detail: {
        value: {
          name: 'test',
        },
      },
    };
    component.onImagePicked(event);
  });

  test('onSubmit', () => {
    const mockFormGroup = AppMocks.getMockFormGroup();
    const dispatchSpy = spyOn(component['store'], 'dispatch');
    component.productForm = mockFormGroup;
    component.productOperationInfo = {
      productOperation: APP_CONSTANTS.PRODUCT_ADD,
      disableFormFields: false,
    };
    component.onSubmit();
    expect(dispatchSpy).toHaveBeenCalled();

    component.selectedProduct = {
      name: 'test',
      description: 'test',
      imageUrl: 'test',
      createdBy: 'test',
      price: 111,
      id: 1,
    };
    component.productOperationInfo = {
      productOperation: APP_CONSTANTS.PRODUCT_UPDATE,
      disableFormFields: false,
    };
    component.onSubmit();
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
