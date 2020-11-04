import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollListViewComponent } from './poll-list-view.component';

describe('PollListViewComponent', () => {
  let component: PollListViewComponent;
  let fixture: ComponentFixture<PollListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
