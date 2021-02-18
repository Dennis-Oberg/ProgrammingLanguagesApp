import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: string;
  isLoggedIn: boolean;
  loggedInUser: string;

  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }


  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(res => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.error = err;
      });
  }


  openForm() {
    document.getElementById("hiddenLogin").style.display = "block";
  }

  closeForm() {
    document.getElementById("hiddenLogin").style.display = "none";
  }

}
