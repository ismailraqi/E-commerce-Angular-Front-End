import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser = null;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    console.log(this.currentUser);
    this.currentUser = this.authService.userConected();
  }
  signout(){
    this.authService.Logout()
  }

}
