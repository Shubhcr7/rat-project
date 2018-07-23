import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-sms-batch',
  templateUrl: './send-sms-batch.component.html',
  styleUrls: ['./send-sms-batch.component.css']
})
export class SendSmsBatchComponent implements OnInit {
  course;
  batch;
  constructor(public http:Http) {
   }
  ngOnInit() {

    this.http.get(environment.url+'course/allcourse').subscribe(res=>{
      this.course=res.json();
      console.log(res.json());
    });
  }

  selectBatch(x)
  {
    console.log(x);
    this.http.post(environment.url+'search/by_course',{subject:x}).subscribe(res=>{
      console.log(res.json());
    });
  }

  submit(x)
  {
    this.http.get('http://www.proactivesms.in/sendsms.jsp?user=ratech&password=cfd733bf6cXX&mobiles=+918090038230&sms=test-mutiple-sms&senderid=ratipl').subscribe(res=>{
      console.log(res);
    })
  }
}
