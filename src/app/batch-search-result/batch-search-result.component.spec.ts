import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchSearchResultComponent } from './batch-search-result.component';

describe('BatchSearchResultComponent', () => {
  let component: BatchSearchResultComponent;
  let fixture: ComponentFixture<BatchSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
