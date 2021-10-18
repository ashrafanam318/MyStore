import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import * as data from "../../../assets/data.json";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    this.prodService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

}
