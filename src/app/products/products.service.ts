import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as URL_CONSTANTS from '../shared/urls';
import * as APP_CONSTANTS from '../shared/app.constants';
import { StoreProduct } from '../shared/store/products/products.model';
import { ProductOperationInfo } from '../shared/Models/product';
@Injectable({ providedIn: 'root' })
export class ProductService {
  selectedProduct: StoreProduct;
  constructor(private httpService: HttpClient) {}
  private productOperationInfo: ProductOperationInfo = {
    productOperation: APP_CONSTANTS.PRODUCT_ADD,
    disableFormFields: false,
  };

  getAllProducts() {
    return this.httpService.get(URL_CONSTANTS.HOST + URL_CONSTANTS.PRODUCTS);
  }

  getProductInfo() {
    return this.productOperationInfo;
  }
  setProductInfo(operation: ProductOperationInfo) {
    this.productOperationInfo = operation;
  }

  addProduct(product: StoreProduct) {
    return this.httpService.post(
      URL_CONSTANTS.HOST + URL_CONSTANTS.PRODUCTS,
      product
    );
  }

  updateProduct(product: StoreProduct) {
    return this.httpService.put(
      URL_CONSTANTS.HOST + URL_CONSTANTS.PRODUCTS + '/' + product.id,
      product
    );
  }

  deleteProduct(product: StoreProduct) {
    return this.httpService.delete(
      URL_CONSTANTS.HOST + URL_CONSTANTS.PRODUCTS + '/' + product.id
    );
  }

  setProduct(product: StoreProduct) {
    this.selectedProduct = product;
  }
  
  getProduct() {
    return this.selectedProduct;
  }
}
