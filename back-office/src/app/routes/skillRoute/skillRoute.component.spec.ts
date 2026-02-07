import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRouteComponent } from './skillRoute.component';

describe('SkillRouteComponent', () => {
  let component: SkillRouteComponent;
  let fixture: ComponentFixture<SkillRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
