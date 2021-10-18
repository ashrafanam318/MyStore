import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {} from "rxjs/operators";
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/data.json");
  }

  getProductById(id: number): Observable<Product> {
    const productsObservable = this.http.get<Product[]>("assets/data.json");
    return new Observable(subscriber => {
      productsObservable.subscribe(products => {
        const product = products.find(p => p.id.toString() === id.toString());
        subscriber.next(product);
      });
    });
  }
}
