import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
declare var $:any;
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
  constructor(public http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/search/duefee').subscribe(res=>{
    this.students=res.json();
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
      this.http.post('http://localhost:3000/email',this.data).subscribe(res=>{
      alert('An email was sent to '+this.data.user);
      $('#sendmail').modal('hide');
    },err=>{
      alert('Email sent fail please try again !');
    })
  }
}

