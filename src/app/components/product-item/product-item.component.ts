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
  selectOptions: string[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.selectOptions = new Array(10).fill(1).map((one, i) => i + one);
  }

  addToCart(q: string): void {
    this.cartService.setCartItem(this.product, Number(q));
    alert(`Added to Cart!`);
  }

}
