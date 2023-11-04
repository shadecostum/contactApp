import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import{HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './user/add-user/add-user.component'
import {ReactiveFormsModule} from '@angular/forms';
import { GetContactComponent } from './contact/get-contact/get-contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { GetDetailComponent } from './detail/get-detail/get-detail.component';
import { AddDetailComponent } from './detail/add-detail/add-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    AddUserComponent,
    GetContactComponent,
    AddContactComponent,
    GetDetailComponent,
    AddDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, NgbModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
