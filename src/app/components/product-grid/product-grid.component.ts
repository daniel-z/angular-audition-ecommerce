import { Component, OnInit } from '@angular/core';
import { GlassesService } from '../../services/glasses.service';
import { Glass } from '../../models/glass';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  constructor(private glassesService: GlassesService) { }

  products: Glass[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.glassesService.getGlasses().subscribe(products => this.products = products);
    console.log(this.products);
  }
}
