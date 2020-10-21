import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { BaseClass } from '../shared/baseClass';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent extends BaseClass implements OnInit {
  activeTab = 'registration';
  constructor(appService:AppService) {
    super(appService);
   }

  ngOnInit(): void {
  }

  changeTab(tab:string) {
    this.activeTab = tab;
  }
  getClass() {
      return this.themeReference.ACTIVE_TAB;
  }
}
