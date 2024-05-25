import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    console.log(window.alert);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data)=>{
      const productId = data.get('productId');

      if (productId) {
      this.http.get<Product[]>('assets/products.json').subscribe((products: Product[]) => {
        this.product = products.find(p => p.id === productId);
      });
    }
    })

  }

}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}
