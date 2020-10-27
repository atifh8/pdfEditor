import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  errorMessage: string = null;
  registeredEmail: string;

  constructor(private fb: FormBuilder, private rs: RegisterService, private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('submit works', this.form.value)
    this.loginInvalid = false;
    if (this.form.valid) {
      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      console.log('password', password)
      this.rs.onSignUp(username, password).subscribe(res => {
        console.log('login res', res.email)
        this.registeredEmail = res.email
        // this.router.navigate(['./users'])
        // this.form.reset();
      }, errorMessage => {
        console.log(errorMessage)
        this.errorMessage = errorMessage
      })
    }
  }
}
