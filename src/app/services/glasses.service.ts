import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Glass } from '../models/glass';

const glassesData: Glass[] = [
  {
    'id': '2001',
    'name': 'glasses 2001',
    'price': '2001',
    'urlImage': 'products/glasses/2001',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2001',
    'link': '/glasses/2001',
    'description': 'My glasses 2001: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'vision',
      'squared'
    ]
  },
  {
    'id': '2005',
    'name': 'glasses 2005',
    'price': '2005',
    'urlImage': 'products/glasses/2005',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2005',
    'link': '/glasses/2005',
    'description': 'My glasses 2005: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'sunglasses',
      'squared'
    ]
  },
  {
    'id': '2004',
    'name': 'glasses 2004',
    'price': '2004',
    'urlImage': 'products/glasses/2004',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2004',
    'link': '/glasses/2004',
    'description': 'My glasses 2004: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'gold',
      'vision',
      'round'
    ]
  },
  {
    'id': '2002',
    'name': 'glasses 2002',
    'price': '2002',
    'urlImage': 'products/glasses/2002',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2002',
    'link': '/glasses/2002',
    'description': 'My glasses 2002: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'gold',
      'vision',
      'round'
    ]
  },
  {
    'id': '2006',
    'name': 'glasses 2006',
    'price': '2006',
    'urlImage': 'products/glasses/2006',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2006',
    'link': '/glasses/2006',
    'description': 'My glasses 2006: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'vision',
      'squared'
    ]
  },
  {
    'id': '2003',
    'name': 'glasses 2003',
    'price': '2003',
    'urlImage': 'products/glasses/2003',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2003',
    'link': '/glasses/2003',
    'description': 'My glasses 2003: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'gold',
      'vision',
      'round'
    ]
  },
  {
    'id': '2015',
    'name': 'glasses 2015',
    'price': '2015',
    'urlImage': 'products/glasses/2015',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2015',
    'link': '/glasses/2015',
    'description': 'My glasses 2015: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'sunglasses',
      'squared'
    ]
  },
  {
    'id': '2009',
    'name': 'glasses 2009',
    'price': '2009',
    'urlImage': 'products/glasses/2009',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2009',
    'link': '/glasses/2009',
    'description': 'My glasses 2009: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'vision',
      'squared'
    ]
  },
  {
    'id': '2012',
    'name': 'glasses 2012',
    'price': '2012',
    'urlImage': 'products/glasses/2012',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2012',
    'link': '/glasses/2012',
    'description': 'My glasses 2012: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'vision',
      'rectangular'
    ]
  },
  {
    'id': '2016',
    'name': 'glasses 2016',
    'price': '2016',
    'urlImage': 'products/glasses/2016',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2016',
    'link': '/glasses/2016',
    'description': 'My glasses 2016: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'vision',
      'female'
    ]
  },
  {
    'id': '2013',
    'name': 'glasses 2013',
    'price': '2013',
    'urlImage': 'products/glasses/2013',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2013',
    'link': '/glasses/2013',
    'description': 'My glasses 2013: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'vision',
      'computer'
    ]
  },
  {
    'id': '2014',
    'name': 'glasses 2014',
    'price': '2014',
    'urlImage': 'products/glasses/2014',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2014',
    'link': '/glasses/2014',
    'description': 'My glasses 2014: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'sunglasses',
      'round'
    ]
  },
  {
    'id': '2007',
    'name': 'glasses 2007',
    'price': '2007',
    'urlImage': 'products/glasses/2007',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2007',
    'link': '/glasses/2007',
    'description': 'My glasses 2007: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'vision',
      'metal'
    ]
  },
  {
    'id': '2011',
    'name': 'glasses 2011',
    'price': '2011',
    'urlImage': 'products/glasses/2011',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2011',
    'link': '/glasses/2011',
    'description': 'My glasses 2011: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'silver',
      'vision',
      'female'
    ]
  },
  {
    'id': '2008',
    'name': 'glasses 2008',
    'price': '2008',
    'urlImage': 'products/glasses/2008',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2008',
    'link': '/glasses/2008',
    'description': 'My glasses 2008: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'silver',
      'sunglasses',
      'aviator'
    ]
  },
  {
    'id': '2010',
    'name': 'glasses 2010',
    'price': '2010',
    'urlImage': 'products/glasses/2010',
    'cloudUrlImage': 'https://res.cloudinary.com/mediacdn/image/upload/c_scale,h_330,w_330/v1/products/glasses/2010',
    'link': '/glasses/2010',
    'description': 'My glasses 2010: You wanna know how I got these scars? My father was... a drinker',
    'tags': [
      'black',
      'sunglasses',
      'squared'
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class GlassesService {

  constructor() { }


  getHeroes(): Observable<Glass[]> {
    return of(glassesData);
  }

  getGlasses(): Observable<Glass[]> {
    const glasses: Glass[] = glassesData;
    return of(glasses);
  }
}
