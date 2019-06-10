import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() cloudUrlImage: string;
  @Input() name: string;
  @Input() price: string;

  constructor() { }

  ngOnInit() {
  }

}
