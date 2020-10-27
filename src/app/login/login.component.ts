import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  errorMessage: string = null;
  constructor(private fb: FormBuilder, private rs: RegisterService, private router: Router) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log('submit works', this.form.value)
    this.loginInvalid = false;
    console.log('first');
    if (this.form.valid) {
      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      console.log('second');
      this.rs.onSignIn(username, password).subscribe(res => { // moked jest.spyon
        console.log('login res', res)
        this.router.navigate(['./carriers'])                    // test router path after 

        this.form.reset();
      }, errorMessage => {
        console.log('the message is ', errorMessage)
        this.errorMessage = errorMessage
      })
    }
  }
}

