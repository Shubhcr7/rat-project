import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSmsStudentComponent } from './send-sms-student.component';

describe('SendSmsStudentComponent', () => {
  let component: SendSmsStudentComponent;
  let fixture: ComponentFixture<SendSmsStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSmsStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSmsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
