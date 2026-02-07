import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRouteComponent } from './projectRoute.component';

describe('ProjectRouteComponent', () => {
  let component: ProjectRouteComponent;
  let fixture: ComponentFixture<ProjectRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
