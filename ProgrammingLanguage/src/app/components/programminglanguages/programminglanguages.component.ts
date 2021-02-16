import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ CProgLanguages} from 'src/model/CProgLanguages'

@Component({
  selector: 'app-programminglanguages',
  templateUrl: './programminglanguages.component.html',
  styleUrls: ['./programminglanguages.component.css']
})
export class ProgramminglanguagesComponent implements OnInit {
  
  
  public proglanglist: CProgLanguages[];
  constructor() { 
    
    
  }

  ngOnInit(): void {
  }
}
