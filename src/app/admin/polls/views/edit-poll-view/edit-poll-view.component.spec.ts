import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPollViewComponent } from './edit-poll-view.component';

describe('EditPollViewComponent', () => {
  let component: EditPollViewComponent;
  let fixture: ComponentFixture<EditPollViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPollViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPollViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
