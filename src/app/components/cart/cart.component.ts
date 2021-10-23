import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: string = "0.00";
  userFullName: string = "";
  userAddress: string = "";
  userCardNo: string = "";
  checkout: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  clearCart(withAlert: boolean = true): void {
    this.cartItems = [];
    this.totalPrice = "0.00";
    this.cartService.clearCart();

    if (withAlert) alert("Removed all items from the cart!")
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = Number(
      this.cartItems.reduce(
        (sum, cur) => 
          sum += cur.price * (cur.quantity > 0 ? cur.quantity : 0)
          , 0
        )
    ).toFixed(2);
  }

  onQuantityChange(e: {cartItemId: number, quantity: number}): void {
    this.cartService.updateQuantityById(e.cartItemId, e.quantity);
    this.loadCartItems();
  }

  onSubmit(): void {
    this.checkout = true;
  }

  onBackToProducts(): void {
    this.checkout = false;
    this.clearCart(false);
  }
}
