import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : any[] = [];
  productTotal = 0;
  total = 0;

  addToCart(product:any){
    this.items.push(product);
    this.productTotal += product.price;
    this.total = this.productTotal;
  }

  addShippingPrice(shipping:any){
    this.total = this.productTotal + shipping.price;
  }

  getItems(){
    return this.items;
  }

  getProductTotal(){
    return this.productTotal;
  }

  getTotal(){
    return this.total;
  }

  removeFromCart(item:any){
    let index = this.items.indexOf(item);
    this.items.splice(index,1);
    this.productTotal -= Number(item.price);
    this.total -= Number(item.price);
    return [this.items,this.productTotal];
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
  
  constructor(
    private http : HttpClient,
  ) { }
}

