import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesComponent } from './les.component';

describe('LesComponent', () => {
  let component: LesComponent;
  let fixture: ComponentFixture<LesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
