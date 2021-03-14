import { Component, OnInit } from '@angular/core';
import { AddLanguageComponent } from './components/add-language/add-language.component';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { GuardService } from './services/guard-service.service';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'Programming Languages';
  isLoggedIn: boolean;
  loggedInUser: string;
  links: any[];
  activeLinkIndex = -1;
  

  constructor(private authService: LoginService, private router: Router, private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    
    iconRegistry.addSvgIcon('profile', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/user.svg'));
  
   
   }
   showLinks(){
     if(this.isLoggedIn){
       this.links = [
        {
            label: 'Home',
            link: './Welcome-Page',
            index: 0
        }, {
            label: 'Programming-Languages',
            link: './Programming-Languages',
            index: 1
        }, {
            label: 'IDEs',
            link: './Frameworks',
            index: 2
        }, 
        {
          label: 'Database-Submit',
          link: './Database-Submit',
          index: 3
      },
    ];
     } else {
      this.links = [
        {
            label: 'Home',
            link: './Welcome-Page',
            index: 0
        }, {
            label: 'Programming-Languages',
            link: './Programming-Languages',
            index: 1
        }, {
            label: 'IDEs',
            link: './Frameworks',
            index: 2
        }, 
    ];
     }
   }
  
  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
        this.showLinks();
      } else {
        this.isLoggedIn = false;
        this.showLinks();
      }
    });


    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.links.indexOf(this.links.find(tab => tab.link === '.' + this.router.url));
  });

  }

  onLogoutClick() {
    this.authService.logOut();
    this.isLoggedIn = false;
    this.showLinks();

  }
    

  openForm() {
    document.getElementById("hiddenLogin").style.display = "block";   
  }


  closeForm() {
    document.getElementById("hiddenLogin").style.display = "none";
  }
}

