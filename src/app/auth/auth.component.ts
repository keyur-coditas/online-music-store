import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
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
