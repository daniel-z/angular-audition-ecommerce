import { Component, OnInit, Input } from '@angular/core';
import { Glass } from '../../models/glass';

@Component({
  selector: 'app-product-grid-list',
  templateUrl: './product-grid-list.component.html',
  styleUrls: ['./product-grid-list.component.scss']
})
export class ProductGridListComponent implements OnInit {
  @Input() products: Glass[];

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

}
