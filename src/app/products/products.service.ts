import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as URL_CONSTANTS from '../shared/urls';
import * as APP_CONSTANTS from '../shared/app.constants';
import { Product } from '../shared/store/products/products.model';
@Injectable({ providedIn: 'root' })
export class ProductService {
  selectedProduct: Product;
  constructor(private httpService: HttpClient) {}
  private productOperationInfo: {
    productOperation: string;
    disableFormFields: boolean;
  } = {
    productOperation: APP_CONSTANTS.PRODUCT_ADD,
    disableFormFields: false,
  };

  getAllProducts() {
    return this.httpService.get(URL_CONSTANTS.HOST + URL_CONSTANTS.PRODUCTS);
  }

  getProductInfo() {
    return this.productOperationInfo;
  }
  setProductInfo(operation: {
    productOperation: string;
    disableFormFields: boolean;
  }) {
    this.productOperationInfo = operation;
  }

  addProduct(product: Product) {
    return this.httpService.post(
      URL_CONSTANTS.HOST + URL_CONSTANTS.PRODUCTS,
      product
    );
  }

  updateProduct(product: Product) {
    return this.httpService.put(
      URL_CONSTANTS.HOST + URL_CONSTANTS.PRODUCTS + '/' + product.id,
      product
    );
  }

  deleteProduct(product: Product) {
    return this.httpService.delete(
      URL_CONSTANTS.HOST + URL_CONSTANTS.PRODUCTS + '/' + product.id
    );
  }

  setProduct(product: Product) {
    this.selectedProduct = product;
  }
  
  getProduct() {
    return this.selectedProduct;
  }
}
