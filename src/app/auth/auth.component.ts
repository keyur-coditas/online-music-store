import { Component } from '@angular/core';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  activeTab: string = 'registration';
  constructor() {}

  changeTab(tab:string) {
    this.activeTab = tab;
  }
}
