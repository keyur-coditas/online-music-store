import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/shared/app.service';
import { BaseClass } from 'src/shared/baseClass';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseClass implements OnInit {

  constructor(appService:AppService) {
    super(appService);
   }

   ngOnInit(): void {
    this.initializeThemeSubscription();
  }

  
  ngOnDestroy(): void {
    this.destroyThemeSubscription();
  }

}
