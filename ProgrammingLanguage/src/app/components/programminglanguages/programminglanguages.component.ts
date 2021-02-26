import { Component, OnInit } from '@angular/core';
import { ProgrammingServiceService } from '../../services/programming-service.service';
import { CProgLanguages } from 'src/model/CProgLanguages';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppComponent } from 'src/app/app.component';
import {MatTableDataSource} from '@angular/material/table'; 

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

  dataSource = new MatTableDataSource;

  ngOnInit(): void {

    this.progservice.getPlayer().subscribe(p => {
      this.proglanguages = p;
      this.dataSource = new MatTableDataSource(this.proglanguages);
    });
  }

  displayedColumns: string[] = ['ProgrammingLanguages'];
 

  verifyUser() {
    if (!(this.isLoggedIn)) //Error message if non-logged in user tries to visit details for each language
    {
      alert("You do not have access to this object");
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; //Kanske fixa så att filtret bara funkar på namn och inte description, år osv?
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
