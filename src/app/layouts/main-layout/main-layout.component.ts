import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  links = [
    'Home',
    'Glasses'
  ];

  constructor() {}

  heroImageUrl: string;

  ngOnInit() {
    this.heroImageUrl = 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,w_1110/v1/content/glasses/2017.jpg';
  }

}
