import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {
  @Input() cartItems: CartItem[] = []
  constructor() { }

  ngOnInit(): void {
    
  }

}
