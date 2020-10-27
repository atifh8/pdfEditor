import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterService } from '../register/register.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

const registerService = {
  onSignIn() {
    return of([{ id: 1 }])
  }
};
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: RegisterService; //1
  let spy: any;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,

      ],
      providers: [
        // { provide: RegisterService, useValue: registerService }, //2
        RegisterService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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
  it('should call onSubmit', () => {

    expect(component.form.valid).toBeFalsy();
    const response: any = { success: true };
    const app = fixture.debugElement.componentInstance;
    const router = TestBed.inject(Router);
    component.form.controls['username'].setValue("test@test.com");
    component.form.controls['password'].setValue("123456789");
    jest.spyOn(service, 'onSignIn').mockReturnValue(of(response));
    jest.spyOn(app.router, 'navigate').mockImplementation(() => { });
    // expect(app.router.navigate).toHaveBeenCalled();

    // jest.spyOn(router, 'navigate');
    // component.form.valid = true;
    component.onSubmit();
    // expect(component.form.valid).toBeFalsy();
    expect(app.router.navigate).toHaveBeenCalled();
    // expect(app.form.valid).toBeTruthy();
  });
});

