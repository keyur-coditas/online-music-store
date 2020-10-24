import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMocks } from 'src/app/shared/mocks/mocks';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Store, useValue: AppMocks.getMockStoreService() },
      ],
      imports: [ ReactiveFormsModule, FormsModule]
    }).compileComponents();;
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('onSubmit', () => {
   const mockFormGroup = AppMocks.getMockFormGroup();
   const dispatchSpy = spyOn(component['store'], 'dispatch');
    component.loginForm = mockFormGroup;
    component.onSubmit();
    expect(dispatchSpy).toHaveBeenCalled();
  });


});
