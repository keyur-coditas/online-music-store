import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductService } from '../products.service';
import * as ProductActions from '../../shared/store/products/product.actions';
import { StoreProduct } from '../../shared/store/products/products.model';
import * as APP_CONSTANTS from '../../shared/app.constants';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductOperationInfo } from '../../shared/models/product';
import { CurrentUser } from '../../shared/models/user';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-product-operations',
  templateUrl: './product-operations.component.html',
  styleUrls: ['./product-operations.component.scss']
})
export class ProductOperationsComponent implements OnInit {
  productForm: FormGroup;
  productOperationInfo: ProductOperationInfo;
  imagePath: string = '';
  path: string = '../../../assets/images/';
  currentUser: string = '';
  imageUrlPreview: string;
  selectedProduct: StoreProduct;
  name: FormControl;
  description: FormControl;
  price: FormControl;
  imageUrl: FormControl;
  buttonText: string;
  nameInvalid: boolean;
  priceInvalid: boolean;
  constructor(
    private productService:ProductService,
    private store: Store,
    private router: Router) {}

  ngOnInit(): void {
    this.productOperationInfo = this.productService.getProductInfo();
    this.productForm = this.createProductFormGroup();
    this.selectedProduct = this.productService.getProduct();
    if(this.productOperationInfo.productOperation === APP_CONSTANTS.PRODUCT_UPDATE || this.productOperationInfo.productOperation === APP_CONSTANTS.PRODUCT_VIEW) {
     this.initializeFormData();
    }
    
    this.store.pipe(
      map((state) => state['auth'].currentUser))
    .subscribe((data:CurrentUser) => {
      this.currentUser = data.email;
    })

    this.setButtonText();
  }

  createProductFormGroup() {
    this.name = new FormControl('', [Validators.required]);
    this.description = new FormControl('');
    this.price = new FormControl('',[Validators.required]);
    this.imageUrl = new FormControl();
    return new FormGroup({
        name: this.name,
        description: this.description,
        price: this.price,
        imageUrl: this.imageUrl
    });
}
onSubmit() {
  if(this.productForm.valid) {
    const product:StoreProduct = {
      name: this.name.value,
      description: this.description.value,
      price: this.price.value,
      imageUrl: this.imageUrlPreview,
      createdBy: this.currentUser
    }
    if(this.productOperationInfo.productOperation === APP_CONSTANTS.PRODUCT_ADD) {
  
      this.store.dispatch(ProductActions.productAddAttempted({product}));
    } else {
      product.id = this.selectedProduct.id;
      this.store.dispatch(ProductActions.productUpdateAttempt({product}))
    }
  }
}
onImagePicked(event) {
 const file = event.detail.value;
if(file) {
  this.imagePath = this.path+file.name;
  this.imageUrlPreview = this.imagePath;
}
}
initializeFormData() {
  const {name, description, price, imageUrl} = this.selectedProduct;
  this.name.setValue(name);
  this.imageUrlPreview = imageUrl;
  this.price.setValue(price);
  this.description.setValue(description);
}
  cancel() {
    this.router.navigate(['products']);
  }
  setButtonText() {
    if(this.productOperationInfo.productOperation === APP_CONSTANTS.PRODUCT_ADD) {
      this.buttonText = 'add-button';
    } else {
      this.buttonText = 'update-button';
    }
  }
  nameValueChanged(event) {
    this.name.setValue(event.detail.value);
    this.nameInvalid = !this.productForm.controls['name'].valid;
  }
  priceValueChanged(event) {
    this.price.setValue(event.detail.value);
    this.priceInvalid = !this.productForm.controls['price'].valid;
  }
  descriptionValueChanged(event) {
    this.description.setValue(event.detail.value);
  }
}
