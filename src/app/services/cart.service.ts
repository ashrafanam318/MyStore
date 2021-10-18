import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [
    {
      "id": 1,
      "name": "Book",
      "price": 9.99,
      "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "You can read it!",
      "quantity": 1
    },
    {
      "id": 2,
      "name": "Headphones",
      "price": 249.99,
      "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "Listen to stuff!",
      "quantity": 1
    },
    {
      "id": 3,
      "name": "Backpack",
      "price": 79.99,
      "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "Carry things around town!",
      "quantity": 1
    },
    {
      "id": 4,
      "name": "Glasses",
      "price": 129.99,
      "url": "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "Now you can see!",
      "quantity": 1
    },
  ]
  constructor() { }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
}