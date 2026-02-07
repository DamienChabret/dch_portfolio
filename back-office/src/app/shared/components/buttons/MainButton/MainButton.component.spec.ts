import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainButtonComponent } from './MainButton.component';

describe('MainButtonComponent', () => {
  let component: MainButtonComponent;
  let fixture: ComponentFixture<MainButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
