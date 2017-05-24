import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontPriceDisplayComponent } from './pont-price-display.component';

describe('PontPriceDisplayComponent', () => {
  let component: PontPriceDisplayComponent;
  let fixture: ComponentFixture<PontPriceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontPriceDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontPriceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
