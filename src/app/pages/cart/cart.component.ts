import { Component } from '@angular/core';
import { CartService } from './../../services/cart.service';
// import { CartService } from '../../services/cart.service';


export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  constructor(
    private cartService: CartService
  ) {
  }

  products = this.cartService.getProducts()

  clearCart() {
    this.cartService.clearCart();
    window.alert('Your Cart has been clear successfully!');
  }
}
// export class CartComponent implements OnInit {
//   cartItems = this.cartService.product;

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void { }

//   removeItem(itemId: number) {
//     // this.cartService.removeFromCart(itemId);
//     window.alert('Product removed from Cart!');
//   }

//   getCartTotal() {
//     // return this.cartService.getCartTotal();
//   }

//   clearCart() {
//     this.cartService.clearCart();
//     window.alert('Your Cart has been clear successfully!');
//   }




//   // deleteFromCart(product: Product) {
//   //   this.cartService.addToCart(product);
//   //   window.alert('Your product has been deleted from the cart!');
//   // }
// }


// product.model.ts

