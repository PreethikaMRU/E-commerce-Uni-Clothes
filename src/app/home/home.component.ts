import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','../app.component.scss']
})
export class HomeComponent {
  productList: Product[] = [];
  path="../assets/images/product/sunsettee.jpg";

  constructor (service: ProductService){
    this.productList = service.getProducts();
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }
}
