import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../shared/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  loginForm: FormGroup;
  emailInvalid: boolean;
  passwordInvalid: boolean;

  constructor(
    private store: Store,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
      if(this.loginForm.valid) {
        this.store.dispatch(AuthActions.loginAttempted(this.loginForm.value));
      } else {
        this.showError();
      }
  }
  navigate(event) {
    event.preventDefault();
    this.router.navigate(['auth/register']);
  }

  emailValueChanged(event) {
    this.loginForm.controls['email'].setValue(event.detail.value);
    this.emailInvalid = !this.loginForm.controls['email'].valid;
  }
  passwordValueChanged(event) {
    this.loginForm.controls['password'].setValue(event.detail.value);
    this.passwordInvalid = !this.loginForm.controls['password'].valid;
  }
  showError() {
    if(!this.loginForm.controls['email'].valid) {
      this.emailInvalid = true;
    } 
    if(!this.loginForm.controls['password'].valid) {
      this.passwordInvalid = true;
    }
  }

}
