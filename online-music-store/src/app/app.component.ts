import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/shared/app.service';
import { BaseClass } from '../shared/BaseClass';


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
    this.initializeThemeSubscription();
  }

  changeTheme() {
    this.appService.changeTheme(this.theme);
  }
  
  ngOnDestroy(): void {
    this.destroyThemeSubscription();
  }
}
