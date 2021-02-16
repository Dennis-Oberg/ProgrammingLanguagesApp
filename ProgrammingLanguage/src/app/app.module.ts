import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component'
import { ProgramminglanguagesComponent } from './components/programminglanguages/programminglanguages.component'



@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    ProgramminglanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'/Welcome-Page',pathMatch:'full'},
      {path:'Welcome-Page', component:WelcomepageComponent},
      {path:'Programming-Languages', component:ProgramminglanguagesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
