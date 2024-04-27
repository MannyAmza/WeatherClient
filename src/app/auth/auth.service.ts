import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginResult } from './login-result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public tokenKey: string="tokenKey";
  constructor(protected http:HttpClient) {
  }
  login(item: LoginRequest):Observable<LoginResult>{
    let url = `${environment.baseURL}api/Admin/Login`;
    return this.http.post<LoginResult>(url, item)
    .pipe(tap(loginRequest => {
      if(loginRequest.success){
        localStorage.setItem(this.tokenKey, loginRequest.token);
      }
    }));
  }

  getToken():string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
