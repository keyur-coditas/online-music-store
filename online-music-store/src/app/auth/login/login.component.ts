import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(
    private store: Store
    ) {
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
