import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  isShown: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  toggleShow() {
    this.isShown = ! this.isShown;
    }

}
