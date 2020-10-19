import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/shared/app.service';
import { BaseClass } from 'src/shared/BaseClass';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseClass implements OnInit {

  constructor(appService: AppService) {
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
