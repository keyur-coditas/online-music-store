import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { User } from '../../shared/Store/auth/user.model';
import { Product } from '../../shared/Models/product';
import { ProductService } from './products.service';
import { AppState } from '../../shared/Store/auth/auth.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  currentUser: any;
  constructor(
    private productsService: ProductService,
    private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.currentUser = this.store
    .subscribe((data:any) => {
      this.currentUser = data.auth.currentUser;
    })
    this.productsService.getAllProducts().subscribe((data: any) => {
     this.products = data;
    })
  }

}
