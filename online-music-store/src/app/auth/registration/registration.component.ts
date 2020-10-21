import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../shared/app.service';
import { User } from '../../shared/Models/user';
import { AuthenticationService } from '../auth.service';
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
     private authenticationService:AuthenticationService,
     private store: Store
     ) {
    this.registrationForm = this.createRegistrationFormGroup();
   }

  ngOnInit(): void {
  }

  createRegistrationFormGroup() {
    this.email = new FormControl('', [Validators.required]);
    this.password =  new FormControl('', [Validators.required]);
    this.confirmPassword = new FormControl('', [Validators.required]);
      return new FormGroup({
          email:  this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
      });
  }

  onSubmit() {
    this.passwordMismatch = false;
    if(this.registrationForm.valid) {
      let email = this.email.value;
      let password = this.password.value;
      let cnfmpassword = this.confirmPassword.value;
    if(password === cnfmpassword) {
      let user:User = {
        email: this.email.value,
        password: this.password.value,
      }
      this.store.dispatch(AuthActions.signup({email, password}));
    } else {
      this.passwordMismatch = true;
    }
    }
  }

}
