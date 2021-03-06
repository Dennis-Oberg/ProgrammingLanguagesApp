import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@Angular/forms";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { ProgramminglanguagesComponent } from './components/programminglanguages/programminglanguages.component';
import { ProfileComponent } from './components/profile/Profile.component'
import { AngularFireModule } from '@angular/fire'; 
import { environment } from '../environments/environment'; 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { AddLanguageComponent } from './components/add-language/add-language.component';
import { GuardService } from './services/guard-service.service';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { AddlanguagedialogComponent } from './components/addlanguagedialog/addlanguagedialog.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    ProgramminglanguagesComponent,
    DetailsComponent,
    LoginComponent,
    AddLanguageComponent,
    ProfileComponent,
    ProjectOverviewComponent,
    AddlanguagedialogComponent,
    FrameworksComponent,
  ],
  imports: [
    MatExpansionModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'/Welcome-Page', pathMatch:'full'},
      {path:'Welcome-Page', component:WelcomepageComponent},
      {path:'Programming-Languages', component:ProgramminglanguagesComponent},
      {path:'details/:id', component:DetailsComponent,  canActivate:[GuardService] },
      {path:'Login', component:LoginComponent},
      {path:'ProjectOverview', component:ProjectOverviewComponent},
      {path:'Database-Submit', component:AddLanguageComponent, canActivate:[GuardService]},
      {path:'Profile', component:ProfileComponent, canActivate:[GuardService]},
      {path:'Frameworks', component:FrameworksComponent}

    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
