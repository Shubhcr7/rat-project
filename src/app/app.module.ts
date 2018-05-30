import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PackagesComponent } from './packages/packages.component';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent,
    RegistrationFormComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:RegistrationFormComponent},
      {path:'registration',component:RegistrationFormComponent},
      {path:'enquiry',component:EnquiryFormComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
