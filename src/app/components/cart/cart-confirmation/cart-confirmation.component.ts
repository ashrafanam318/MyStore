import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-cart-confirmation',
  templateUrl: './cart-confirmation.component.html',
  styleUrls: ['./cart-confirmation.component.css']
})
export class CartConfirmationComponent implements OnInit {
  @Input() name: string = "";
  @Input() address: string = "";
  @Input() cardNo: string = "";
  @Input() price: string = "";
  
  @Output() backToProducts: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  backToProductsPress(): void { 
    this.backToProducts.emit(true);
    // navigate to products!
  }
}
