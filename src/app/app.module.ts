import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BatchRegisterComponent } from './batch-register/batch-register.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchBatchComponent } from './search-batch/search-batch.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchSearchResultComponent } from './batch-search-result/batch-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent,
    RegistrationFormComponent,
    BatchRegisterComponent,
    SearchStudentComponent,
    SearchResultComponent,
    SearchBatchComponent,
    BatchDetailsComponent,
    BatchSearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:RegistrationFormComponent},
      {path:'registration',component:RegistrationFormComponent},
      {path:'enquiry',component:EnquiryFormComponent},
      {path:'batch-register',component:BatchRegisterComponent},
      {path:'search-student',component:SearchStudentComponent},
      {path:'search-batch',component:SearchBatchComponent},
      {path:'batch-details',component:BatchDetailsComponent},
      {path:'batch-search-result',component:BatchSearchResultComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
