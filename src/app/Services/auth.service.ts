import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,
              private router:Router,) { }

  rootUrl = "http://localhost:51603";
  
  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/Token', data, { headers: reqHeader });
  }

  getUserClaims() {
    var hesdersApi = new Headers();
    if (localStorage.getItem('userToken')) {
      hesdersApi.append('Authorization', 'Bearer' + localStorage.getItem('userToken'))
    }
    return this.http.get('http://localhost:51603/api/Account/GetUserClaims',
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('userToken')
        })
      });
  }

  Logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }

  userConected(){
    return localStorage.getItem('userName');
  }
}

