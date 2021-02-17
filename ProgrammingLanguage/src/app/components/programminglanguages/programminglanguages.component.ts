import { Component, OnInit } from '@angular/core';
import { ProgrammingServiceService } from '../../services/programming-service.service';
import { CProgLanguages } from 'src/model/CProgLanguages';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programminglanguages',
  templateUrl: './programminglanguages.component.html',
  styleUrls: ['./programminglanguages.component.css']
})
export class ProgramminglanguagesComponent implements OnInit {
  
 

  proglanglist$: Observable<any>;
  


  

  constructor(private af: AngularFirestore, private progservice: ProgrammingServiceService) { 

    this.proglanglist$ = af.collection("Languages").valueChanges();

  }


  ngOnInit(): void {
   

  }
}
