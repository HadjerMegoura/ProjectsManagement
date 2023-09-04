import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NomComposantComponent } from './nom-composant/nom-composant.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminListSujetsComponent } from './admin-list-sujets/admin-list-sujets.component';
import { AdminListEnsComponent } from './admin-list-ens/admin-list-ens.component';
import { AdminListStudentsComponent } from './admin-list-students/admin-list-students.component';

//import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
  routingComponents,
  NomComposantComponent,
  AdminHomeComponent,
  AdminListSujetsComponent,
  AdminListEnsComponent,
  AdminListStudentsComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
