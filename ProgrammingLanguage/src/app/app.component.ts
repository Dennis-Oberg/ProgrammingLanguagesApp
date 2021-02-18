import { Component, OnInit } from '@angular/core';
import { AddLanguageComponent } from './components/add-language/add-language.component';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { GuardService } from './services/guard-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Programming Languages';
 
  isLoggedIn: boolean;
  loggedInUser: string;
  constructor(private authService: LoginService, private router: Router) { }
  
  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }


  onLogoutClick() {
    this.authService.logOut();
  }
    

  openForm() {
    document.getElementById("hiddenLogin").style.display = "block";
  }


  closeForm() {
    document.getElementById("hiddenLogin").style.display = "none";
  }
}

