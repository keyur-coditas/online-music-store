import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/shared/app.service';
import { BaseClass } from 'src/shared/baseClass';
import { User } from '../../../shared/Models/user';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends BaseClass implements OnInit {
  registrationForm: FormGroup;
  @Output() userRegisrered = new EventEmitter();
  constructor(
     appService:AppService,
     private authenticationService:AuthenticationService
     ) {
    super(appService);
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
    let password = this.registrationForm.controls['password'].value;
    let cnfmpassword = this.registrationForm.controls['confirmPassword'].value;
    if(password === cnfmpassword) {
      let user:User = {
        email: this.registrationForm.controls['email'].value,
        password: this.registrationForm.controls['password'].value,
      }
      this.authenticationService.register(user).subscribe(data => {
       alert('You have been registered successfully! Please login to continue');
       this.userRegisrered.emit();
      });
    } else {

    }
  }

}
