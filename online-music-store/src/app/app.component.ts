import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './shared/app.service';
import { BaseClass } from './shared/baseClass';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseClass implements OnInit, OnDestroy{
  
  constructor(public appService: AppService) {
    super(appService);
  }
  
  ngOnInit(): void {
  }

  changeTheme() {
    this.appService.changeTheme(this.theme);
  }
  
  ngOnDestroy(): void {
    this.destroyThemeSubscription();
  }
}
