import { Subscription } from 'rxjs';
import * as StyleConstants from './style-constants';
import * as CONSTANTS from './app.constants';
import { AppService } from './app.service';

export class BaseClass {
    theme: string;
    themeReference: any;
    themeSubscription: Subscription;
    constructor(public appService: AppService) {
      this.initializeThemeSubscription();
    }

    initializeThemeSubscription(): void {
        this.themeSubscription = this.appService.theme.subscribe((theme: string) => {
            this.theme = theme;
            if(theme === CONSTANTS.LIGHT_THEME) {
              this.themeReference = StyleConstants.light;
            } else {
              this.themeReference = StyleConstants.dark;
            }
          });
    }
    destroyThemeSubscription() {
        this.themeSubscription.unsubscribe();
    }
}