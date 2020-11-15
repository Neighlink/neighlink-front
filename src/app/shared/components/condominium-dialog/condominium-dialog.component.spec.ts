import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumDialogComponent } from './condominium-dialog.component';

describe('CondominiumDialogComponent', () => {
  let component: CondominiumDialogComponent;
  let fixture: ComponentFixture<CondominiumDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominiumDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
