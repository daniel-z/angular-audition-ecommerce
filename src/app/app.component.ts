import { Component, OnInit } from '@angular/core';
import { GlassesService } from './services/glasses.service';
import { Glass } from './models/glass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private glassesService: GlassesService) {}

  glasses: Glass[];
  title = 'angular-audition-ecommerce';

  ngOnInit() {
    this.getGlasses();
  }

  getGlasses(): void {
    this.glassesService.getGlasses().subscribe(glasses => this.glasses = glasses);
    console.log(this.glasses);
  }
}
