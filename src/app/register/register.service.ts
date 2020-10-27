import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { RegisterModal } from './register.modal';
import { error } from 'protractor';
interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string
  localId: string,
  registered?: boolean,

}

const API_KEY = 'AIzaSyDod8rYy2VENCxQrB1SsWINvmVowCfmZ-o'
@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  registerUser = new BehaviorSubject<RegisterModal>(null);

  //REST SIGN UP // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  constructor(private http: HttpClient) { }
  onSignUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }
    ).pipe(catchError(this.handleError), tap(resData => {
      const expirationDate = new Date(new Date().getTime() * 1000)
      // const registerUser = new RegisterModal(resData.email, resData.localId, resData.idToken, expirationDate);
      // this.registerUser.next(registerUser)
    }))
  }

  onSignIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError),
      tap(resData => {
        // const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000)
        // const registerUser = new RegisterModal(resData.email, resData.localId, resData.idToken, expirationDate);
        // this.registerUser.next(registerUser)
        this.handleAuthentication(resData.email, resData.idToken, resData.localId, +resData.expiresIn)
      }))
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    const registerUser = new RegisterModal(email, userId, token, expirationDate);
    this.registerUser.next(registerUser)
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Unknown error occured!'
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage)
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = ' Email already exist !'
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email address not found !'
        break;
      case 'INVALID_PASSWORD':
        errorMessage: 'Wrong password !'
        break;
    }
    return throwError(errorMessage)
  }

}
