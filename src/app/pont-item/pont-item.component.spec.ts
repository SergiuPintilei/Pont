import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontItemComponent } from './pont-item.component';

describe('PontItemComponent', () => {
  let component: PontItemComponent;
  let fixture: ComponentFixture<PontItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
