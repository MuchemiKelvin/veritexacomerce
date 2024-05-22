import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.http.get<Product[]>('assets/products.json').subscribe((products: Product[]) => {
        this.product = products.find(p => p.id === productId);
      });
    }
  }
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}
