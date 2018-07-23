import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSmsBatchComponent } from './send-sms-batch.component';

describe('SendSmsBatchComponent', () => {
  let component: SendSmsBatchComponent;
  let fixture: ComponentFixture<SendSmsBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSmsBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSmsBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
