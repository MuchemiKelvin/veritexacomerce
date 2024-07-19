import { Injectable } from '@angular/core';
// import { Product } from '../pages/product-details/product-details.component';
import { Product } from '../pages/products/products.component';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: Product [] = [];
  getPoducts: any;

  // constructor() { }

  // addToCart( product: Product ){
  //   this.product.push(product);
  // }

  addToCart(product: CartItem) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  // getProducts(){
  //   return this.product;
  // }

  removeFromCart(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.cartItemsSubject.next(this.cartItems);
  }

  clearCart(){
    this.product = [];
    return this.product;
  }

  // clearCart() {
  //   this.cartItems = [];
  //   this.cartItemsSubject.next(this.cartItems);
  // }

  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }


}

