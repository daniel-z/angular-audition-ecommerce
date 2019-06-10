import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridControlsComponent } from './product-grid-controls.component';

describe('ProductGridControlsComponent', () => {
  let component: ProductGridControlsComponent;
  let fixture: ComponentFixture<ProductGridControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGridControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
