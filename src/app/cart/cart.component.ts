import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss',"../app.component.scss"]
})
export class CartComponent {
  cart : Product[] = [];
  s: boolean = false;
  total:number=0;
  q:number=0;

  constructor(private service:ProductService){
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
    this.cart=service.getCart();

    if(this.cart.length>=1){
      this.s=true;
    }
    else{
      this.s=false;
    }

    this.findTotal();
  }

  deleteItem (id:number) {
    this.cart=this.service.deleteItem(id);
    this.findTotal();
  }

  findTotal () {
    this.total=this.service.getTotal();
  }

  decQuantity(id:number,quantity:any){
    if(Number(quantity)>1){
      this.service.updateCart(id,Number(quantity)-1);
    }
    this.cart=this.service.getCart();
    this.findTotal();
  }

  incQuantity(id:number,quantity:any){
    this.service.updateCart(id,Number(quantity)+1);
    this.cart=this.service.getCart();
    this.findTotal();
  }
}
