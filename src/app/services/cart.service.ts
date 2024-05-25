import { Injectable } from '@angular/core';
import { ProductsComponent } from '../pages/products/products.component';
// import { Product } from '../pages/product-details/product-details.component';
import { Product } from '../pages/products/products.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: Product [] = [];
  getPoducts: any;

  // constructor() { }

  addToCart( product: Product ){
    this.product.push(product);
  }
  getProducts(){
    return this.product;
  }
  clearCart(){
    this.product = [];
    return this.product;
  }
}

