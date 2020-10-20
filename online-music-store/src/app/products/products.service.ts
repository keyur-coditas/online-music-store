import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as URL_CONSTANTS from '../../shared/urls';

@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(private httpService: HttpClient) {}

    getAllProducts() {
        return this.httpService.get(URL_CONSTANTS.HOST+URL_CONSTANTS.PRODUCTS);
    }    
}