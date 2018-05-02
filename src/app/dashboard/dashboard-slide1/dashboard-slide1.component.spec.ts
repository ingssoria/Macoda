import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSlide1Component } from './dashboard-slide1.component';

describe('DashboardSlide1Component', () => {
  let component: DashboardSlide1Component;
  let fixture: ComponentFixture<DashboardSlide1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSlide1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSlide1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
