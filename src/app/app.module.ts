import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BatchRegisterComponent } from './batch-register/batch-register.component';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent,
    RegistrationFormComponent,
    BatchRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:RegistrationFormComponent},
      {path:'registration',component:RegistrationFormComponent},
      {path:'enquiry',component:EnquiryFormComponent},
      {path:'batch-register',component:BatchRegisterComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
