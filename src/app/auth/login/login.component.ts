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
      }  
  }
  navigate(event) {
    event.preventDefault();
    this.router.navigate(['auth/register']);
  }
}
