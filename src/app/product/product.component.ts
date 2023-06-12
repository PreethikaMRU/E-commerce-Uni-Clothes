import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss','../app.component.scss']
})
export class ProductComponent {

  @Input() product: any;


}
