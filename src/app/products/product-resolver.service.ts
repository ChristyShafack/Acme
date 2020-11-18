import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root'
})

export class ProductResolver implements Resolve<Product>{

    constructor(private productService: ProductService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        const id = +route.paramMap.get('id');
        return null;
    }
}