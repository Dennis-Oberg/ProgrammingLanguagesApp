import { Component, OnInit } from '@angular/core';
import { ProgrammingServiceService } from '../../services/programming-service.service';
import { CProgLanguages } from 'src/model/CProgLanguages';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-programminglanguages',
  templateUrl: './programminglanguages.component.html',
  styleUrls: ['./programminglanguages.component.css']
})
export class ProgramminglanguagesComponent implements OnInit {
  
  proglanguages: CProgLanguages[];
  isLoggedIn: Boolean;

  constructor(private af: AngularFirestore, private progservice: ProgrammingServiceService, private appComponent: AppComponent) { 
    this.isLoggedIn = appComponent.isLoggedIn;
  }

  

  ngOnInit(): void {
   
    this.progservice.getPlayer().subscribe(p => { 
      this.proglanguages = p;
    });
  }

  verifyUser ()
  {
    if (!(this.isLoggedIn)) //Error message if user tries to visit details for each language
  {
    alert("You do not have access to this object");
  }
  }

}
