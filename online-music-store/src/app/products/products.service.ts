import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as URL_CONSTANTS from '../../shared/urls';
import * as APP_CONSTANTS from '../../shared/app.constants';
@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(private httpService: HttpClient) {}
    private productOperation: string = APP_CONSTANTS.PRODUCT_ADD;

    getAllProducts() {
        return this.httpService.get(URL_CONSTANTS.HOST+URL_CONSTANTS.PRODUCTS);
    }    

    getProductOperation() {
        return this.productOperation;
    }
    setProductOperation(operation: string) {
        this.productOperation = operation;
    }

}