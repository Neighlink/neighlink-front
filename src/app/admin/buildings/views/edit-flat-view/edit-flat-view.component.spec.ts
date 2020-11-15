import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlatViewComponent } from './edit-flat-view.component';

describe('EditFlatViewComponent', () => {
  let component: EditFlatViewComponent;
  let fixture: ComponentFixture<EditFlatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFlatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
