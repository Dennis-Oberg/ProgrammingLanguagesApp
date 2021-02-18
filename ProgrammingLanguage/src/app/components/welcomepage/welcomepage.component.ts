import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  isShown: boolean = false;
  isLoggedIn: boolean;
  loggedInUser: string;
  
  constructor(private atService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.atService.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
        console.log(this.isLoggedIn);
        
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logoutClick(){
    this.atService.logOut();
  }

  toggleShow() {
    this.isShown = ! this.isShown;
    }

}
