import { LocalStorage } from './../../../Models/local-storage.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private authService : AuthService,
    private router : Router) { }
    loginForm = new FormGroup({
      email:new FormControl(""),
      password:new FormControl("")
    });
  ngOnInit() {
  }
  OnSubmit(){
    var e= this.loginForm.controls.email.value
    var p= this.loginForm.controls.password.value
    this.authService.userAuthentication(e,p).subscribe((data : LocalStorage)=>{
     localStorage.setItem('userToken',data.access_token);
     localStorage.setItem('userName',e);
     this.router.navigate(['/home']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });

}
}
