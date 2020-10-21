import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../../shared/app.service';
import { User } from '../../shared/Models/user';
import { AuthenticationService } from '../auth.service';
import * as AuthActions from '../../shared/Store/auth/auth.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  implements OnInit {
  registrationForm: FormGroup;
  constructor(
     private authenticationService:AuthenticationService,
     private store: Store
     ) {
    this.registrationForm = this.createRegistrationFormGroup();
   }

  ngOnInit(): void {
  }

  createRegistrationFormGroup() {
      return new FormGroup({
          email: new FormControl(),
          password: new FormControl(),
          confirmPassword: new FormControl(),
      });
  }

  onSubmit() {
    let email = this.registrationForm.controls['email'].value;
    let password = this.registrationForm.controls['password'].value;
    let cnfmpassword = this.registrationForm.controls['confirmPassword'].value;
    if(password === cnfmpassword) {
      let user:User = {
        email: this.registrationForm.controls['email'].value,
        password: this.registrationForm.controls['password'].value,
      }
      this.store.dispatch(AuthActions.signup({email, password}));
    } else {

    }
  }

}
