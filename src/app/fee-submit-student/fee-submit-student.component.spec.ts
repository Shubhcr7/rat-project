import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSubmitStudentComponent } from './fee-submit-student.component';

describe('FeeSubmitStudentComponent', () => {
  let component: FeeSubmitStudentComponent;
  let fixture: ComponentFixture<FeeSubmitStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeSubmitStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSubmitStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
