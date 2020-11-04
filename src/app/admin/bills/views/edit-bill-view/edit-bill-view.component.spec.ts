import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBillViewComponent } from './edit-bill-view.component';

describe('EditBillViewComponent', () => {
  let component: EditBillViewComponent;
  let fixture: ComponentFixture<EditBillViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBillViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
