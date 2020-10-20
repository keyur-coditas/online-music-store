import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppService } from '../../../shared/app.service';
import { BaseClass } from '../../../shared/BaseClass';
import { User } from '../../../shared/Models/user';
import { AuthenticationService } from '../auth.service';
import * as AuthActions from '../../../shared/Store/auth/auth.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {
  loginForm: any;

  constructor(
    appService:AppService,
    private authenticationService:AuthenticationService,
    private store: Store,
    private router: Router
    ) {
    super(appService);
    this.loginForm = this.createLoginFormGroup();
   }

  ngOnInit(): void {
  }

  createLoginFormGroup() {
      return new FormGroup({
          email: new FormControl(),
          password: new FormControl()
      });
  }

  onSubmit() {
      let user:User = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value,
      }
      let {email, password} = user;
      this.store.dispatch(AuthActions.loginAttempted({email, password}));  
  }

}
