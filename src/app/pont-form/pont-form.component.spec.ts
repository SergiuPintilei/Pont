import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontFormComponent } from './pont-form.component';

describe('PontFormComponent', () => {
  let component: PontFormComponent;
  let fixture: ComponentFixture<PontFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
