import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Router } from '@angular/router';
import { catchError, mergeMap, map, tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/auth/auth.service';
import * as ProductActions from './product.actions';
import { ProductService } from 'src/app/products/products.service';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class ProductEffects {

    constructor(
        private actions: Actions,
        private router: Router,
        private productsService: ProductService,
        private toastrService: ToastrService
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
                   this.toastrService.success('Added!');
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
                           return { type: ProductActions.PRODUCT_FETCH_SUCCESS, data }
                         }),
                         catchError((error) => ( of({type: ProductActions.PRODUCT_ADD_FAILURE})) )
                     )
                )
             )
         })

         productsUpdateAttempt = createEffect(() => {
            return this.actions.pipe(
                 ofType(ProductActions.PRODUCT_UPDATE_ATTEMPT),
                 mergeMap((action:any) => this.productsService.updateProduct(action.product)
                     .pipe(
                         map((data:any) => {
                           return { type: ProductActions.PRODUCT_UPDATE_SUCCESS, data }
                         }),
                         catchError((error) => ( of({type: ProductActions.PRODUCT_UPDATE_FAILURE})) )
                     )
                )
             )
         })

         productsUpdateSuccess = createEffect(() => {
            return this.actions.pipe(
                ofType(ProductActions.PRODUCT_UPDATE_SUCCESS),
                tap((action:any) => {
                  this.toastrService.success('Updated!');
                   this.router.navigate(['products']);
                }
               )
            )
         }, {dispatch: false})

         productsUpdateFailure = createEffect(() => {
            return this.actions.pipe(
                ofType(ProductActions.PRODUCT_UPDATE_FAILURE),
                tap((action:any) => {
                  this.toastrService.error('Couldnot update product');
                   this.router.navigate(['products']);
                }
               )
            )
         }, {dispatch: false})


         productsDeleteAttempt = createEffect(() => {
            return this.actions.pipe(
                 ofType(ProductActions.PRODUCT_DELETE_ATTEMPT),
                 mergeMap((action:any) => this.productsService.deleteProduct(action.product)
                     .pipe(
                         map((data:any) => {  
                           return { type: ProductActions.PRODUCT_DELETE_SUCCESS, action }
                         }),
                         catchError((error) => ( of({type: ProductActions.PRODUCT_DELETE_FAILURE})) )
                     )
                )
             )
         })

         productsDeleteSuccess = createEffect(() => {
            return this.actions.pipe(
                ofType(ProductActions.PRODUCT_DELETE_SUCCESS),
                     map((data:any) => {
                        return { type: ProductActions.PRODUCT_DELETE_SUCCESS, payload: {data} }
                        }),
                     catchError((error) => ( of({type: ProductActions.PRODUCT_DELETE_FAILURE})) )
            )
         }, {dispatch: false})

         productsDeleteFailure = createEffect(() => {
            return this.actions.pipe(
                ofType(ProductActions.PRODUCT_DELETE_FAILURE),
                tap((action:any) => {
                   this.toastrService.error('Couldnot delete ptoduct');
                }
               )
            )
         }, {dispatch: false})
}