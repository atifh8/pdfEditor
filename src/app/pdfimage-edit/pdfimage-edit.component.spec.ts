import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFImageEditComponent } from './pdfimage-edit.component';

describe('PDFImageEditComponent', () => {
  let component: PDFImageEditComponent;
  let fixture: ComponentFixture<PDFImageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDFImageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDFImageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
