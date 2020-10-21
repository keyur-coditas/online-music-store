import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppService } from '../../shared/app.service';
import { BaseClass } from '../../shared/baseClass';
import { ProductService } from '../products.service';
import * as ProductActions from '../../shared//Store/products/product.actions';
import { Product } from '../../shared/Store/products/products.model';
@Component({
  selector: 'app-product-operations',
  templateUrl: './product-operations.component.html',
  styleUrls: ['./product-operations.component.scss']
})
export class ProductOperationsComponent extends BaseClass implements OnInit, OnDestroy {
  productForm: FormGroup;
  productOperation: string;
  imagePath: string = '';
  path: string = '../../../assets/images/';
  currentUser: any;
  constructor(appService: AppService,
    private productService:ProductService,
    private store: Store) {
    super(appService);
   }

  ngOnInit(): void {
   this.productOperation = this.productService.getProductOperation();
    this.productForm = this.createProductFormGroup();
    this.store.subscribe((data:any) => {
     this.currentUser = data.auth.currentUser.email;
    })
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
    const product:Product = {
      name: this.productForm.controls['name'].value,
      description: this.productForm.controls['description'].value,
      price: this.productForm.controls['price'].value,
      imageUrl: this.imagePath,
      createdBy: this.currentUser
    }
    this.store.dispatch(ProductActions.productAddAttempted({product}));
  }
  onImagePicked(event) {
   const file = (event.target as HTMLInputElement).files[0];
  if(file) {
    this.imagePath = this.path+file.name;
  }
  }

  ngOnDestroy(): void {
    this.destroyThemeSubscription();
  }
}
