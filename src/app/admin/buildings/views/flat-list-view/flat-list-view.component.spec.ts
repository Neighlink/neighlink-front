import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatListViewComponent } from './flat-list-view.component';

describe('FlatListViewComponent', () => {
  let component: FlatListViewComponent;
  let fixture: ComponentFixture<FlatListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
