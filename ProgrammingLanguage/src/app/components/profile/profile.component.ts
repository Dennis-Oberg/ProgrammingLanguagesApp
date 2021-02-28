import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  isLoggedIn: boolean;
  loggedInUser: String;
    constructor(private authService: LoginService, private app: AppComponent,  private router: Router) {
   
    
   }

  ngOnInit(): void {
   
    
      this.authService.getAuth().subscribe(auth => {
        if (auth) {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
          
        } else {
          this.isLoggedIn = false;
        }
      });
  }


}

