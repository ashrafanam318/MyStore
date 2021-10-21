import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product = new Product();


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  setQuantity(q: string): void {
    this.cartService.setCartItem(this.product, Number(q));
  }

}
