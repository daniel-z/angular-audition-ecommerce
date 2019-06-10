import { Component, OnInit } from '@angular/core';
import { GlassesService } from './services/glasses.service';
import { Glass } from './models/glass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  glasses: Glass[];

  ngOnInit() {}
}
