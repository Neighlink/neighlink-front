import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleListViewComponent } from './rule-list-view.component';

describe('RuleListViewComponent', () => {
  let component: RuleListViewComponent;
  let fixture: ComponentFixture<RuleListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
