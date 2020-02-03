import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/Services/auth.service';
import { User } from 'src/app/Models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor() { }
 

  ngOnInit() {
  }


 }


