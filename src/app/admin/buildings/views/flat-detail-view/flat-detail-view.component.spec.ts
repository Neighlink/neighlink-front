import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatDetailViewComponent } from './flat-detail-view.component';

describe('FlatDetailViewComponent', () => {
  let component: FlatDetailViewComponent;
  let fixture: ComponentFixture<FlatDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
