import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/shared/app.service';
import { BaseClass } from 'src/shared/baseClass';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-product-operations',
  templateUrl: './product-operations.component.html',
  styleUrls: ['./product-operations.component.scss']
})
export class ProductOperationsComponent extends BaseClass implements OnInit, OnDestroy {
  productForm: FormGroup;
  productOperation: string;

  constructor(appService: AppService,
    private productService:ProductService) {
    super(appService);
   }

  ngOnInit(): void {
   this.productOperation = this.productService.getProductOperation();
    this.productForm = this.createProductFormGroup();
  }

  createProductFormGroup() {
    return new FormGroup({
        name: new FormControl(),
        description: new FormControl(),
        price: new FormControl(),
        imageUrl: new FormControl()
    });
}
  onSubmit() {

  }
  onImagePicked(event) {
    console.log('val ', event)
  }
  ngOnDestroy(): void {
    this.destroyThemeSubscription();
  }
}
