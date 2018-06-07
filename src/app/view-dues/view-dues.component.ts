import { CheckLoginService } from './../check-login.service';
import  swal  from 'sweetalert';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
declare var $:any;
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-dues',
  templateUrl: './view-dues.component.html',
  styleUrls: ['./view-dues.component.css']
})
export class ViewDuesComponent implements OnInit {
  students;
  subject;
  text;
  data={
    'subject':'',
    'text':'',
    'user':''
  }
  constructor(public http:Http,public router:Router,service:CheckLoginService) {
    service.isValid();
   }

  ngOnInit() {
   
    this.http.get(environment.url+'search/duefee').subscribe(res=>{
    this.students=res.json();
    },err=>{
      if(err.status=404){
        swal("Woaaahh!! , No Dues","Currently no student has any fee dues","success");
      }
    });
  }
  sort(){
    $('#excel').stupidtable();
  }
  print(){
    $('#excel').table2excel({
      exclude:".noExl",
      name:"Worksheet",
      filename:"abcd"
    });
  }
  openModal(email,fee_due)
  { 
    $('#sendmail').modal('show');
    this.subject='Regarding due fees at RAT';
    this.text="Dear student , your due date has been crossed , kindly deposit the due fees amounting to ₹"+fee_due+" as soon as possible"; 
    this.data.user=email;
  }
  sendMail(formdata)
  { 
    this.data.subject=formdata.subject;
    this.data.text=formdata.text;
      this.http.post(environment.url+'email',this.data).subscribe(res=>{
        swal("Mail Sent!", "An email was sent to "+this.data.user, "success");
      $('#sendmail').modal('hide');
    },err=>{
      swal("Error Sending Mail !!","The mail was not sent , please check your connection and try again","error");
    })
  }
}

