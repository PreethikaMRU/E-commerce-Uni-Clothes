import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  p : any;
  cart: Product [] = [];
  ID: any;
  Total: number=0;
  searchList : Product [] = [];
  public cartPath : string = "../assets/images/cart.png";
  constructor() { }

  public getProducts(){
    return productList;
  }

  public getCart(){
    return this.cart;
  }

  public addCart(id:number,q:number,s:string){
    this.ID=this.cart.find((ele) => ele.id == id);
    if(this.ID){
      if(this.ID['quantity']<q){
        this.ID['quantity']=q;
      }
    }
    else{
      this.p = productList.find((ele) => ele.id == id);
      this.p['quantity']=q;
      this.p['selectedsize']=s;
      this.cart.push(this.p);
    }
    this.checkCart();
  }

  public checkCart(){
    return (this.cart.length);
  }

  public updateCart(id:number,q:number){
    let cartItem:any= this.cart.find((ele) => ele.id == id);
    cartItem['quantity']=q;
  }

  public deleteItem(id:number){
    this.cart=this.cart.filter((ele) => ele.id != id);
    this.checkCart();
    return this.cart;
  }

  public getTotal(){
    this.Total = 0;
    this.cart.map((ele) => {
      this.Total+=ele.quantity*ele.cost
    })

    return this.Total;
  }

  

}


const productList = [
  new Product(1,"Tees","../assets/images/product/sunsettee.jpg","Sunset Tee","A black coloured t-shirt with sunset image with japanese letters","Trend",500,1,["XS","S","L","XL","XXL"],""),
  new Product(2,"Shirts","../assets/images/product/blackshirt.jpg","Plain Black shirt","A black coloured plain casual shirt","Trend",700,1,["S","M","L","XL","XXL","XXXL"],""),
  new Product(3,"Jeans pants","../assets/images/product/blackjean.jpg","A Black faded jean pant","A black denim jean with fade and stitched designs","New",800,1,["XS","S","L","XXL"],""),
  new Product(4,"Hoodies","../assets/images/product/navyhoodie.jpg","A purple coloured hoodie","A purple coloured full sleeve hooded sweatshirt","New",900,1,["XS","S","M","L","XL","XXL","XXXL"],""),
  new Product(5,"Jackets","../assets/images/product/fauxblackjacket.png","A black coloured faux jacket","Black coloured thick fleece jacket","New",950,1,["M","L","XL"],""),
  new Product(6,"Caps","../assets/images/product/whitecap.jpg","White cap","A simple white baseball cap","New",400,1,["free-size"],""),
  new Product(7,"Tees","../assets/images/product/teatee.jpg","Tea Shirt","A graphic white coloured t-shirt with 'Tea'","New",450,1,["S","M","L","XL"],""),
  new Product(8,"Tees","../assets/images/product/tropicaltee.jpg","Tropical Tee","A beige coloured graphic t-shirt with tropical island images","New",400,1,["XS","S","M","L"],""),
  new Product(9,"Tees","../assets/images/product/yellowtee.jpg","Go your own way Tee","A bright yellow coloured t-shirt with graphics depicting pathways","Category",400,1,["S","L","XXL","XXXL"],""),
  new Product(10,"Tees","../assets/images/product/smiletee.jpg","T-shirt with smiley face","A black coloured graphical t-shirt with It is what it is smiley face","Category",500,1,["L","XL","XXXL"],""),
  new Product(11,"Tees","../assets/images/product/nasatee.png","A space ship graphics tee","A white coloured graphic t-shirt depicting space","Category",500,1,["XS","S","L","XXL"],""),
  new Product(12,"Tees","../assets/images/product/feathertee.jpg","Feather Tee","A white coloured graphical t-shirt with feather image","Category",400,1,["XS","S","M","L","XXXL"],""),
  new Product(13,"Tees","../assets/images/product/playingcardstee.jpg","Playing cards Tee","A black coloured playing cards graphical t-shirt","Category",500,1,["XS","L","XXL","XXXL"],""),
  new Product(14,"Shirts","../assets/images/product/blueshirt.jpg","A blue-white shirt","Half blue and Half white mixed shirt","Category",750,1,["XS","S","M","L"],""),
  new Product(15,"Shirts","../assets/images/product/denimshirt.jpg","A denim blue-white shirt","Half blue and Half white mixed denim jean shirt","Category",800,1,["M","L","XL","XXL"],""),
  new Product(16,"Shirts","../assets/images/product/stripedshirt.png","A black yellow striped shirt","Black and yellow striped shirt","Category",700,1,["XS","S","L","XXL","XXXL"],""),
  new Product(17,"Jeans pants","../assets/images/product/bluejean.jpg","A blue drawstring jean pant","A loose fitted blue drawstring denim jean","Category",900,1,["XS","S","M","XXL","XXXL"],""),
  new Product(18,"Jeans pants","../assets/images/product/whitejean.jpg","A white graffiti jean pant","A white wide leg graffiti print denim jean","Category",1000,1,["XS","S","M","XXL","XXXL"],""),
  new Product(19,"Jeans pants","../assets/images/product/skullblackjean.jpg","A black jean pant with skull patch","A black coloured denim jean with white skull embroiderry","Trend",1100,1,["XS","S","M","L","XL","XXXL"],""),
  new Product(20,"Hoodies","../assets/images/product/fauxhoodie.jpg","A white faux hoodie","A white coloured faux hooded sweatshirt","Trend",1000,1,["XS","L","XXL"],""),
  new Product(21,"Jackets","../assets/images/product/greenblackjacket.jpg","A black-green jacket","A black-green vintage jacket 90s patchwork","Category",800,1,["XS","M","XL","xxlx"],""),
  new Product(22,"Jackets","../assets/images/product/jeanjacket.png","A jean jacket","A vintage blue coloured denim jean jacket","Trend",900,1,["S","M","L","XXL"],""),
  new Product(23,"Caps","../assets/images/product/blackcap.jpg","A black cap","Black coloured cap with pizza graphics","Category",400,1,["free-size"],""),
  new Product(24,"Caps","../assets/images/product/bluecap.jpg","A navy cap","A plain navy coloured cap","Category",400,1,["free-size"],""),
  new Product(25,"Pajamas","../assets/images/product/printedpajama.jpg","A beige printed pajama","A beige coloured dinosaur printed pajama","New",600,1,["free-size"],""),
  new Product(26,"Pajamas","../assets/images/product/bluepajama.png","Blue pajamas","A plain blue coloured pajamas","Trend",400,1,["free-size"],""),
]
