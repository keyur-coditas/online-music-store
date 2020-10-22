import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppService } from '../../shared/app.service';
import { User } from '../../shared/Models/user';
import * as AuthActions from '../../shared/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  loginForm: any;
  email: FormControl;
  password: FormControl;

  constructor(
    private store: Store
    ) {
    this.loginForm = this.createLoginFormGroup();
   }

  ngOnInit(): void {
  }

  createLoginFormGroup() {
    this.email = new FormControl('', [Validators.required]);
    this.password =  new FormControl('', [Validators.required]);
      return new FormGroup({
          email: this.email,
          password: this.password
      });

  }

  onSubmit() {
      if(this.loginForm.valid) {
        let user:User = {
          email: this.email.value,
          password: this.password.value,
        }
        let {email, password} = user;
        this.store.dispatch(AuthActions.loginAttempted({email, password}));
      }  
  }
}
