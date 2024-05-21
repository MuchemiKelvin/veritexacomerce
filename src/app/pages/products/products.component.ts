// home.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[]; // Define products array with Product interface

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch product data from JSON file
    this.http.get<Product[]>('assets/products.json').subscribe((data: Product[]) => {
      this.products = data;
      console.log({data})
    });
  }

}

// product.model.ts

export interface Product {
  name: string;
  price: number;
  imageUrl: string;
}


