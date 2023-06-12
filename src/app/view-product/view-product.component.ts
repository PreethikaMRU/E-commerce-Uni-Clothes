import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../products';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss','../app.component.scss']
})
export class ViewProductComponent {

  productList: Product[] = [];
  product:any;
  id : number|any;
  Q : number = 1;
  s: string = "";
  error:string="";

  @ViewChild("alert") alert!: ElementRef<HTMLInputElement>;
  @ViewChild("addtocart") addtocart!: ElementRef<HTMLButtonElement>;
  @ViewChild("choose") ch!: ElementRef<HTMLSelectElement>;

  constructor (public activatedRoute:ActivatedRoute, public service: ProductService, private render: Renderer2){
    this.productList=service.getProducts();
    activatedRoute.params.forEach(params => {
      this.myInit(params["id"]);
    })
  }

  myInit(id: number){
    this.id = id;
    this.product=this.productList.find((ele) => ele.id == id);
    this.Q=1;
    this.s="";
    this.error="";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  buttonStyle(choose:any){
    this.render.setStyle(this.addtocart.nativeElement,"pointer-events","none");
    this.render.setStyle(this.addtocart.nativeElement,"border-color","#ddd");
    this.render.setStyle(this.addtocart.nativeElement,"background-color","#ddd");
    choose.value="";
  }

  incQuantity(){
    this.Q=this.Q+1;
  }

  decQuantity(){
    if(this.Q==1){
      this.Q=1;
    }
    else{
      this.Q=this.Q-1;
    }
  }

  addToCart(choose:any){
    if(this.s==""){
      this.s=this.ch.nativeElement.value;
    }
    this.service.addCart(this.id,this.Q,this.s);
    this.showAlert();
    this.buttonStyle(choose);
    this.s="";
  }

  showAlert(){
    this.render.setStyle(this.alert.nativeElement, "visibility", "visible");
    this.render.setStyle(this.alert.nativeElement, "top", "60px");
    this.hideAlert();
  }

  hideAlert(){
    setTimeout(() => {
      this.render.setStyle(this.alert.nativeElement, "visibility", "hidden");
      this.render.setStyle(this.alert.nativeElement, "top", "10px");
    },1500);
  }

  show(choose:any){
    if(choose.value!=""){
      this.s=choose.value;
      this.error="";
      this.render.setStyle(this.addtocart.nativeElement,"pointer-events","visible");
      this.render.setStyle(this.addtocart.nativeElement,"border-color","black");
      this.render.setStyle(this.addtocart.nativeElement,"background-color","black");
    }
  }

  onBlur(){
    if(this.s=="" && this.ch.nativeElement.value==""){
      this.error="Select a size!";
    }
  }


}
