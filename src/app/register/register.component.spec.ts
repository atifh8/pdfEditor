import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterService } from '../register/register.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

describe('RegisterComponent', () => {
  const mockDialogRef = {
    afterClosed: () => {
      return of('proceed');
    },

    close: () => { },
  };

  const mockDialog = {
    open: () => {
      return mockDialogRef;
    },

    getDialogById: (id: string) => {
      return mockDialogRef;
    },
  };
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: RegisterService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        MatFormFieldModule,
        MatCardModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      providers: [
        RegisterService,
        { provide: MatDialog, useValue: mockDialog },
        { provide: MatDialogRef, useValue: mockDialogRef },      //Add these in providers
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(RegisterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });
  it('username field validity', () => {
    let errors = {};
    let username = component.form.controls['username'];
    // let username = component.form.get('username')

    expect(username.valid).toBeFalsy();

    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();
    // Set username to something
    username.setValue("test");
    errors = username.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();
    username.setValue("test@example.com");
    errors = username.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();

  })
  it('should call onSubmit if form is valid', () => {
    const response: any = { success: true };
    const app = fixture.debugElement.componentInstance;
    component.form.controls['username'].setValue("test@test.com");
    component.form.controls['password'].setValue("123456789");
    jest.spyOn(service, 'onSignIn').mockReturnValue(of(response));
    component.onSubmit();
    expect(app.form.valid).toBeTruthy();
  })
});
