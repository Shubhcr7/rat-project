import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BatchRegisterComponent } from './batch-register/batch-register.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { SearchBatchComponent } from './search-batch/search-batch.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchSearchResultComponent } from './batch-search-result/batch-search-result.component';
import { SearchStudentResultComponent } from './search-student-result/search-student-result.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ViewDuesComponent } from './view-dues/view-dues.component';
import { FeeSubmitComponent } from './fee-submit/fee-submit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeeSubmitStudentComponent } from './fee-submit-student/fee-submit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent,
    RegistrationFormComponent,
    BatchRegisterComponent,
    SearchStudentComponent,
    SearchBatchComponent,
    BatchDetailsComponent,
    BatchSearchResultComponent,
    SearchStudentResultComponent,
    StudentDetailsComponent,
    ViewDuesComponent,
    FeeSubmitComponent,
    NavbarComponent,
    HomeComponent,
    FeeSubmitStudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'registration',component:RegistrationFormComponent},
      {path:'enquiry',component:EnquiryFormComponent},
      {path:'batch-register',component:BatchRegisterComponent},
      {path:'search-student',component:SearchStudentComponent},
      {path:'search-batch',component:SearchBatchComponent},
      {path:'batch-details',component:BatchDetailsComponent},
      {path:'batch-search-result',component:BatchSearchResultComponent},
      {path:'search-student-result',component:SearchStudentResultComponent},
      {path:'student-details',component:StudentDetailsComponent},
      {path:'dues',component:ViewDuesComponent},
      {path:'fee-submit',component:FeeSubmitComponent},
      {path:'fee-submit-student',component:FeeSubmitStudentComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
