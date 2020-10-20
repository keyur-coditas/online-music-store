import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppService } from '../../shared/app.service';
import { BaseClass } from '../../shared/BaseClass';
import * as AuthActions from '../../shared/Store/auth/auth.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseClass implements OnInit {

  constructor(appService: AppService, private store: Store) {
    super(appService);
   }

   ngOnInit(): void {
    this.initializeThemeSubscription();
  }
  changeTheme() {
    this.appService.changeTheme(this.theme);
  }
  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  ngOnDestroy(): void {
    this.destroyThemeSubscription();
  }
}
