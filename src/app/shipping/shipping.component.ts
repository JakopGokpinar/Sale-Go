import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';

import stripePayment from './function';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {

  shippingCosts:any;
  total:any;

  constructor(
    private cartService: CartService   
  ) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.total = this.cartService.getTotal();
  }

  addShippingPrice(shipping:any){
    this.cartService.addShippingPrice(shipping);
    this.total = this.cartService.getTotal();
  }

  redefineTotal(){
    this.total = this.cartService.getTotal();
  }

  payment(){
    stripePayment();
  }
}
