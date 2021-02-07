import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:any;

  addToCart(product:any){
    this.cartService.addToCart(product);
    window.alert("Product has been added.");
  }


  constructor(
    private route: ActivatedRoute,
    private cartService : CartService,
  ) { }

  ngOnInit(): void {
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    this.product = products.find(product => { 
      return product.id === Number(productIdFromRoute);
    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(){
    window.alert("You will be notified when the product goes on sale.")
  }

}
