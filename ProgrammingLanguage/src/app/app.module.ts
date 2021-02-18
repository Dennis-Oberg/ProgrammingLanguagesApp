import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@Angular/forms";


 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component'
import { ProgramminglanguagesComponent } from './components/programminglanguages/programminglanguages.component'
import { AngularFireModule } from '@angular/fire'; import { environment } from '../environments/environment'; import { AngularFirestoreModule } from '@angular/fire/firestore'; import { AngularFireAuthModule } from '@angular/fire/auth';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { AddLanguageComponent } from './components/add-language/add-language.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    ProgramminglanguagesComponent,
    DetailsComponent,
    LoginComponent,
    AddLanguageComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'/Welcome-Page',pathMatch:'full'},
      {path:'Welcome-Page', component:WelcomepageComponent},
      {path:'Programming-Languages', component:ProgramminglanguagesComponent},
      {path:'details/:name', component:DetailsComponent},
      {path:'login-page', component:LoginComponent},
      {path:'add-page', component:AddLanguageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
