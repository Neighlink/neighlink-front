import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingListViewComponent } from './building-list-view.component';

describe('BuildingListViewComponent', () => {
  let component: BuildingListViewComponent;
  let fixture: ComponentFixture<BuildingListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
