// home.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[]; // Define products array with Product interface

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }



  ngOnInit(): void {
    // Fetch product data from JSON file
    this.http.get<Product[]>('assets/products.json').subscribe((data: Product[]) => {
      this.products = data;
      console.log({data})
    });
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    console.log(window.alert);
  }
}


// product.model.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}


