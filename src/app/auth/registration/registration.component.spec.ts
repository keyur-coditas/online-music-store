import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppMocks } from '../../shared/mocks/mocks';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Store, useValue: AppMocks.getMockStoreService() },
        TranslateService
      ],
      imports: [ ReactiveFormsModule, FormsModule, TranslateModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });


  test('onSubmit', () => {
    const myModel = {
      email: 'test',
      password: 'test',
      confirmPassword: 'test',
      valid: true
   };
    const fb = new FormBuilder();
    const mockFormGroup = fb.group(myModel);
    const dispatchSpy = spyOn(component['store'], 'dispatch');
     component.registrationForm = mockFormGroup;
     component.onSubmit();
     expect(dispatchSpy).toHaveBeenCalled();

     const myModel2 = {
      email: 'test',
      password: 'test234',
      confirmPassword: 'test',
      valid: true
   };
    const fb2 = new FormBuilder();
    const mockFormGroup2 = fb2.group(myModel2);
    component.registrationForm = mockFormGroup2;
    component.onSubmit();
   });
 
});
