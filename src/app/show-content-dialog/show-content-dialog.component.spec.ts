import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContentDialogComponent } from './show-content-dialog.component';

describe('ShowContentDialogComponent', () => {
  let component: ShowContentDialogComponent;
  let fixture: ComponentFixture<ShowContentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
