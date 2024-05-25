import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
// import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

 products = this.cartService.getPoducts
  constructor(
    private cartService: CartService
  ) { }
}


// product.model.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}
