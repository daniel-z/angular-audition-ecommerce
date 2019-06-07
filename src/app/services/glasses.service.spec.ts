import { TestBed } from '@angular/core/testing';

import { GlassesService } from './glasses.service';

interface Glass {
  id: string;
  name: string;
  price: string;
  urlImage: string;
  cloudUrlImage: string;
  link: string;
  description: string;
  tags: string[];
}

describe('GlassesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlassesService = TestBed.get(GlassesService);
    expect(service).toBeTruthy();
  });
});
