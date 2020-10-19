import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../../shared/Models/User';
import * as URL_CONSTANTS from '../../shared/urls';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    constructor(private httpService: HttpClient) {}

    register(user:User) {
       return this.httpService.post(URL_CONSTANTS.HOST + URL_CONSTANTS.REGISTER, user);
    }

    login(userBody) {
      return this.httpService.get(URL_CONSTANTS.HOST + URL_CONSTANTS.LOGIN)
       .pipe(
           map((vals:any) => {
              return vals.filter((user:any) => {
                return  user.email === userBody.email && user.password === userBody.password;
           })})
       )
    }
}