import { Component } from '@angular/core';

import { products } from '../products';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  products = products;

  constructor(
    private cartService: CartService, 
  ){}

  addToCart(product:any){
    this.cartService.addToCart(product);
    const productName = product.name;
    window.alert(productName + " has been added to cart")
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/