import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { AppComponent } from './app.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { HttpModule } from '@angular/http';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PackagesComponent } from './packages/packages.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent,
    RegistrationFormComponent,
    PackagesComponent,
    TwoWayBindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
