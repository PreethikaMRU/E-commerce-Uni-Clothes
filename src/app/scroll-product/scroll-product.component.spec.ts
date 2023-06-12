import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollProductComponent } from './scroll-product.component';

describe('ScrollProductComponent', () => {
  let component: ScrollProductComponent;
  let fixture: ComponentFixture<ScrollProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
