import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProgrammingServiceService } from '../../services/programming-service.service';
import { CProgLanguages} from 'src/model/CProgLanguages';

@Component({
selector: 'app-details',
templateUrl: './details.component.html',
styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  language: CProgLanguages;

  constructor(private route: ActivatedRoute, private languageService: ProgrammingServiceService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('id');
    this.languageService.getLanguage(name).subscribe(j => this.language = j);
  }
}