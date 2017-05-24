import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontImageComponent } from './pont-image.component';

describe('PontImageComponent', () => {
  let component: PontImageComponent;
  let fixture: ComponentFixture<PontImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
