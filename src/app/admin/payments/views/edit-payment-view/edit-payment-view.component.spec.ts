import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaymentViewComponent } from './edit-payment-view.component';

describe('EditPaymentViewComponent', () => {
  let component: EditPaymentViewComponent;
  let fixture: ComponentFixture<EditPaymentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPaymentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
