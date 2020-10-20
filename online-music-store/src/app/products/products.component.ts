import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/Models/Product';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productsService: ProductService) { }
  
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: any) => {
     this.products = data;
    })
  }

}
