import { Component } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss','../app.component.scss']
})
export class CategoriesComponent {
  productList:  Product [] = [];
  searchList: Product [] = [];
  input = "";

  category : string|null = "";
  constructor (public activatedRoute: ActivatedRoute, private service : ProductService){
    this.productList=service.getProducts();
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params) => {
      this.category = params.get('category');
    })
  }

  onSearch(text:string){
    this.input=text;
    this.searchList = this.productList.filter(item => {
      if(item.title.toLowerCase().includes(text.toLowerCase()) || item.desc.toLowerCase().includes(text.toLowerCase())){
        return item;
      }
      else{
        return;
      }
    })
  }
}
