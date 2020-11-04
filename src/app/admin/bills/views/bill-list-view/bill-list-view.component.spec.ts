import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillListViewComponent } from './bill-list-view.component';

describe('BillListViewComponent', () => {
  let component: BillListViewComponent;
  let fixture: ComponentFixture<BillListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
