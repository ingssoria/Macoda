import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSlide2Component } from './dashboard-slide2.component';

describe('DashboardSlide2Component', () => {
  let component: DashboardSlide2Component;
  let fixture: ComponentFixture<DashboardSlide2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSlide2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSlide2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
