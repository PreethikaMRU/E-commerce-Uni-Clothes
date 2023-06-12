import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss','../app.component.scss']
})
export class NewProductComponent {
  @Input() product : any;

}
