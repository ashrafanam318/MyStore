import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: {[key: string]: CartItem} = {};

  constructor() { }

  getCartItems(): CartItem[] {
    return Object.values(this.cartItems);
  }

  setCartItem(item: Product, quantity: number): void {
    this.cartItems = {
      ...this.cartItems,
      [item.id.toString()]: {
        ...item,
        quantity
      }
    }
  }

  clearCart(): void {
    this.cartItems = {}
  }

  updateQuantityById(id: number, quantity: number): void {
    this.cartItems = {
      ...this.cartItems,
      [id.toString()]: {
        ...this.cartItems[id.toString()],
        quantity
      }
    }
  }
}
