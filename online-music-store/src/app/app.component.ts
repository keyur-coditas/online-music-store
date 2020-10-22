import { Component, OnInit } from '@angular/core';
import { storeButton } from './lit-elements/button';

console.assert(storeButton !== undefined);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor() {

  }
  
  ngOnInit(): void {
  }


}
