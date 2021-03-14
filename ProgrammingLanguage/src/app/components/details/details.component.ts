import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammingServiceService } from '../../services/programming-service.service';
import { CProgLanguages } from 'src/model/CProgLanguages';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  language: CProgLanguages;

  id = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute, private languageService: ProgrammingServiceService) {

  }

  remove() {
    this.languageService.remove(this.id);
  }
  ngOnInit(): void {

    this.languageService.getLanguage(this.id).subscribe(j => this.language = j);

  }
 

  goBack() {
    window.history.back();
  }


}