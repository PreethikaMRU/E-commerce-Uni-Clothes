import { Component, ElementRef, Renderer2, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cartPath : string = "";
  cart: any;
  cartLength: number = 0;
  sideBar = "close";
  categories : string [] = [
    "All","Tees","Shirts","Jeans pants","Jackets","Hoodies","Caps","Pajamas"
  ]
  
  @ViewChild("sidebar") sidebar!:ElementRef<HTMLDivElement>;
  @ViewChild("cartdiv") cartdiv!:ElementRef<HTMLDivElement>;
  @ViewChild("cartdivagain") cartdivagain!:ElementRef<HTMLDivElement>;

  constructor(private service: ProductService, private render: Renderer2){
    this.cartPath = service.cartPath;
    this.cartLength = service.cart.length;
    this.getlength();
  }

  getlength(){
    setInterval(()=>{
      this.cartLength=this.service.cart.length;
      this.updateCart();
    },1000);
  }

  updateCart(){
    if(this.cartLength>0){
      this.render.addClass(this.cartdiv.nativeElement,"cart-div-modified");
      this.render.addClass(this.cartdivagain.nativeElement,"cart-div-modified");
    }
    else{
      this.render.removeClass(this.cartdiv.nativeElement,"cart-div-modified");
      this.render.removeClass(this.cartdivagain.nativeElement,"cart-div-modified");
    }
  }

  sidebarToggle(){
    if(this.sideBar=="close"){
      this.sideBar="open";
      this.render.setStyle(this.sidebar.nativeElement,"visibility","visible");
      this.render.setStyle(this.sidebar.nativeElement,"width","100%");
    }
    else if(this.sideBar=="open"){
      this.sideBar="close";
      this.render.setStyle(this.sidebar.nativeElement,"visibility","hidden");
      this.render.setStyle(this.sidebar.nativeElement,"width","0");
    }
  }
}
