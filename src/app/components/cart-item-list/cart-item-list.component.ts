import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {
  @Input() cartItems: CartItem[] = [];
  @Output() quantityChange: EventEmitter<{cartItemId: number, quantity: number}> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }

  onQuantityChange(e: {cartItemId: number, quantity: number}): void {
    this.quantityChange.emit(e);
  }

}
