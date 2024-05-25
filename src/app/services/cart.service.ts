import { Injectable } from '@angular/core';
import { ProductsComponent } from '../pages/products/products.component';
import { Product } from '../pages/product-details/product-details.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product [] = [];

  constructor() { }

  addToCart( product: Product ){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
}

