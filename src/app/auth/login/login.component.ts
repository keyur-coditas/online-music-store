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
  loginForm: FormGroup;

  constructor(
    private store: Store
    ) {

   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
      if(this.loginForm.valid) {
        this.store.dispatch(AuthActions.loginAttempted(this.loginForm.value));
      }  
  }

}
