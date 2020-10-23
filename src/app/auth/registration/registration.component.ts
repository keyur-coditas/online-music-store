import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  constructor(
     private store: Store
     ) {
   }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      email:  new FormControl('', [Validators.required]),
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
    }
  }

}
