import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component'
import { ProgramminglanguagesComponent } from './components/programminglanguages/programminglanguages.component'

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    ProgramminglanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
AngularFireAuthModule,
AngularFirestoreModule,
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
