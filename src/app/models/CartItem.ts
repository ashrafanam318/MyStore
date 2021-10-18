import { Product } from "./Product";

export class CartItem extends Product {
    quantity: number;
    
    constructor() {
        super();
        this.quantity = 0;
    }
}