import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolRouteComponent } from './toolRoute.component';

describe('ToolRouteComponent', () => {
  let component: ToolRouteComponent;
  let fixture: ComponentFixture<ToolRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
