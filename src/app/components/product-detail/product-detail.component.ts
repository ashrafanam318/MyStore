import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() productId: number = 0;
  product: Product = new Product();
  
  constructor(
    private prodService: ProductService, 
    private activeRoute: ActivatedRoute, 
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res) => {
      this.prodService.getProductById(res.id).subscribe(prod => {
        if (!!prod) this.product = prod;
      })
    });
  }

  addToCart(q: string): void {
    this.cartService.setCartItem(this.product, Number(q));
  }
}
