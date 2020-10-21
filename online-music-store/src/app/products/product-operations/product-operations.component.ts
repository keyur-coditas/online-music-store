import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductService } from '../products.service';
import * as ProductActions from '../../shared/store/products/product.actions';
import { Product } from '../../shared/store/products/products.model';
import * as APP_CONSTANTS from '../../shared/app.constants';
@Component({
  selector: 'app-product-operations',
  templateUrl: './product-operations.component.html',
  styleUrls: ['./product-operations.component.scss']
})
export class ProductOperationsComponent implements OnInit {
  productForm: FormGroup;
  productOperation: string;
  imagePath: string = '';
  path: string = '../../../assets/images/';
  currentUser: any;
  imageUrlPreview: string;
  selectedProduct: any;
  constructor(
    private productService:ProductService,
    private store: Store) {

   }

  ngOnInit(): void {
    this.productOperation = this.productService.getProductOperation();
    this.productForm = this.createProductFormGroup();
    if(this.productOperation === APP_CONSTANTS.PRODUCT_UPDATE) {
     this.selectedProduct = this.productService.getProduct();
     console.log('prod ', this.selectedProduct);
     this.initializeFormData();
    } 
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
  if(this.productOperation === APP_CONSTANTS.PRODUCT_ADD) {
    this.store.dispatch(ProductActions.productAddAttempted({product}));
  } else {
    console.log('update ', product);
    product.id = this.selectedProduct.id;
    this.store.dispatch(ProductActions.productUpdateAttempt({product}))
  }
}
onImagePicked(event) {
 const file = (event.target as HTMLInputElement).files[0];
if(file) {
  this.imagePath = this.path+file.name;
  this.imageUrlPreview = this.imagePath;
}
}
initializeFormData() {
  const {name, description, price, imageUrl} = this.selectedProduct;
  this.productForm.controls['name'].setValue(name);
  this.imageUrlPreview = imageUrl;
  this.productForm.controls['price'].setValue(price);
  this.productForm.controls['description'].setValue(description);
}

}
