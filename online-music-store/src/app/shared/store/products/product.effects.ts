import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Router } from '@angular/router';
import { catchError, mergeMap, map, tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/auth/auth.service';
import * as ProductActions from './product.actions';
import { ProductService } from 'src/app/products/products.service';
@Injectable()
export class ProductEffects {

    constructor(
        private actions: Actions,
        private router: Router,
        private productsService: ProductService
        ) {
        }
  
        productAddAttempt = createEffect(() => {
            return this.actions.pipe(
                 ofType(ProductActions.PRODUCT_ADD_ATTEMPT),
                 mergeMap((action:any) => this.productsService.addProduct(action.product)
                     .pipe(
                         map((data:any) => {
                           return { type: ProductActions.PRODUCT_ADD_SUCCESS, payload: {data} }
                         }),
                         catchError((error) => ( of({type: ProductActions.PRODUCT_ADD_FAILURE})) )
                     )
                )
             )
         })

         productAddSuccess = createEffect(() => {
            return this.actions.pipe(
                ofType(ProductActions.productAddSuccess),
                tap((action:any) => {
                   alert('You have added product successfully');
                   this.router.navigate(['products']);
                }
               )
            )
         }, {dispatch: false})

         productsFetchAttempt = createEffect(() => {
            return this.actions.pipe(
                 ofType(ProductActions.PRODUCT_FETCH_ATTEMPT),
                 mergeMap((action:any) => this.productsService.getAllProducts()
                     .pipe(
                         map((data:any) => {
                           return { type: ProductActions.PRODUCT_FETCH_SUCCESS, payload: {data} }
                         }),
                         catchError((error) => ( of({type: ProductActions.PRODUCT_ADD_FAILURE})) )
                     )
                )
             )
         })
}