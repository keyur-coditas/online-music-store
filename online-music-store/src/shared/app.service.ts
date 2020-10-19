import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class AppService {
    constructor() {}

    private themeSubject = new BehaviorSubject<string>('light');
    public theme = this.themeSubject.asObservable();


    changeTheme(theme: string) {
            if(theme === 'light') {
                this.themeSubject.next('dark');
            } else {
                this.themeSubject.next('light');
            }
    }
    
}