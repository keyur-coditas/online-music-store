import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/shared/app.service';
import { BaseClass } from 'src/shared/BaseClass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {
  loginForm: any;

  constructor(appService:AppService) {
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
    
  }

}
