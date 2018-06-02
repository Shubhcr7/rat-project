import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSubmitComponent } from './fee-submit.component';

describe('FeeSubmitComponent', () => {
  let component: FeeSubmitComponent;
  let fixture: ComponentFixture<FeeSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
