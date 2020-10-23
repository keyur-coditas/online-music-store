import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppMocks } from '../../shared/mocks/mocks';
import { ProductService } from '../products.service';
import { ProductOperationsComponent } from './product-operations.component';

xdescribe('ProductOperationsComponent', () => {
  let component: ProductOperationsComponent;
  let fixture: ComponentFixture<ProductOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOperationsComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ProductService, useValue: AppMocks.getMockProductService() },
        { provide: Router, useValue: AppMocks.getMockRouterService() },
        { provide: Store, useValue: AppMocks.getMockStoreService() }],
      imports: [ ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component['store'], 'pipe').and.callFake(() => {
      console.log('dispatching from the spy!');
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
