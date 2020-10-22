import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class AppService {

    isAuthenticated() {
        if(sessionStorage.getItem('accessToken')) {
            return true;
        } else {
            return false
        }
    }
    
}