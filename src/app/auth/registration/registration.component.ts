import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as AuthActions from '../../shared/store/auth/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  implements OnInit {
  registrationForm: FormGroup;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  passwordMismatch: boolean = false;
  passwordInvalid: boolean;
  emailInvalid: boolean;
  confirmPasswordInvalid: boolean;
  constructor(
     private store: Store
     ) {
   }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      email:  new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
  });
  }

  onSubmit() {
    this.passwordMismatch = false;
    if(this.registrationForm.valid) {
      const email = this.registrationForm.controls['email'].value;
      const password = this.registrationForm.controls['password'].value;
      const cnfmpassword = this.registrationForm.controls['confirmPassword'].value;
    if(password === cnfmpassword) {
      this.store.dispatch(AuthActions.signup({email, password}));
    } else {
      this.passwordMismatch = true;
    }
    } else {
      this.showError()
    }
  }

  emailValueChanged(event) {
    this.registrationForm.controls['email'].setValue(event.detail.value);
    this.emailInvalid = !this.registrationForm.controls['email'].valid;
  }
  passwordValueChanged(event) {
    this.registrationForm.controls['password'].setValue(event.detail.value);
    this.passwordInvalid = !this.registrationForm.controls['password'].valid;
  }
  confirmPasswordValueChanged(event) {
    this.registrationForm.controls['confirmPassword'].setValue(event.detail.value);
    this.confirmPasswordInvalid = !this.registrationForm.controls['confirmPassword'].valid;
  }
  showError() {
    if(!this.registrationForm.controls['email'].valid) {
      this.emailInvalid = true;
    } 
    if(!this.registrationForm.controls['password'].valid) {
      this.passwordInvalid = true;
    }
    if(!this.registrationForm.controls['confirmPassword'].valid) {
      this.passwordInvalid = true;
    }
  }

}
