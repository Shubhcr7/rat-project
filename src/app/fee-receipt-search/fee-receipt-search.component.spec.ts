import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeReceiptSearchComponent } from './fee-receipt-search.component';

describe('FeeReceiptSearchComponent', () => {
  let component: FeeReceiptSearchComponent;
  let fixture: ComponentFixture<FeeReceiptSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeReceiptSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeReceiptSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
