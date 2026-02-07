import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerRouteComponent } from './careerRoute.component';

describe('CareerRouteComponent', () => {
  let component: CareerRouteComponent;
  let fixture: ComponentFixture<CareerRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
