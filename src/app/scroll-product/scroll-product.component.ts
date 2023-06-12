import { Component,ElementRef, ViewChild } from '@angular/core';
import { Product } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-scroll-product',
  templateUrl: './scroll-product.component.html',
  styleUrls: ['./scroll-product.component.scss','../app.component.scss']
})
export class ScrollProductComponent {

  @ViewChild('newProduct')
  newProduct!: ElementRef;

  leftScroll() {
    this.newProduct.nativeElement.scrollLeft -=235;
  }
  
  rightScroll(){
    this.newProduct.nativeElement.scrollLeft +=235;
  }

  productList : Product [] = [];

  constructor(service:ProductService){
    this.productList=service.getProducts();
  }


}
