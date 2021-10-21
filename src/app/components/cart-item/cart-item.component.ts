import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';;
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem = new CartItem();

  @Output() quantityChange: EventEmitter<{cartItemId: number, quantity: number}> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onQuantityChange(newQuantity: string): void {
    this.quantityChange.emit({
      cartItemId: this.cartItem.id,
      quantity: Number(newQuantity)
    });
  }
}
