import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any;
  checkoutForm:any;
  productTotal:any;
  total:any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      surname: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.productTotal = this.cartService.getProductTotal();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(item:any){
    var arr = [];
    arr = this.cartService.removeFromCart(item);
    this.items = arr[0];
    this.productTotal = arr[1];   
  }
}