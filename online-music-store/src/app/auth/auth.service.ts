import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/Models/User';
import * as URL_CONSTANTS from '../../shared/urls';
@Injectable({providedIn: 'root'})
export class AuthenticationService {
    constructor(private httpService: HttpClient) {}

    register(user:User) {
       return this.httpService.post(URL_CONSTANTS.HOST + URL_CONSTANTS.REGISTER, user);
    }
}