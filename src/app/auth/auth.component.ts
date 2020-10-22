import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent  implements OnInit {
  activeTab = 'registration';
  constructor() {

   }

  ngOnInit(): void {
  }

  changeTab(tab:string) {
    this.activeTab = tab;
  }
}
