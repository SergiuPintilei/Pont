import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontSearchComponent } from './pont-search.component';

describe('PontSearchComponent', () => {
  let component: PontSearchComponent;
  let fixture: ComponentFixture<PontSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
