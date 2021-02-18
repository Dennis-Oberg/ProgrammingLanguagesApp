import { Component } from '@angular/core';
import { AddLanguageComponent } from './components/add-language/add-language.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = true;
  title = 'Programming Languages';


}
