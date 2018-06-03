import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFeeReceiptComponent } from './print-fee-receipt.component';

describe('PrintFeeReceiptComponent', () => {
  let component: PrintFeeReceiptComponent;
  let fixture: ComponentFixture<PrintFeeReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintFeeReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintFeeReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
