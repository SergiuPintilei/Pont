import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontItemListComponent } from './pont-item-list.component';

describe('PontItemListComponent', () => {
  let component: PontItemListComponent;
  let fixture: ComponentFixture<PontItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
