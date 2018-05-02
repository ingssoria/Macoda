import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomebannerComponent } from './dashboard-homebanner.component';

describe('DashboardHomebannerComponent', () => {
  let component: DashboardHomebannerComponent;
  let fixture: ComponentFixture<DashboardHomebannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHomebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
