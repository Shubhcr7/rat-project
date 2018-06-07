import { CheckLoginService } from './../check-login.service';
import  swal  from 'sweetalert';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
@Component({
  selector: 'search-student-result',
  templateUrl: './search-student-result.component.html',
  styleUrls: ['./search-student-result.component.css']
})
export class SearchStudentResultComponent implements OnInit {
  student;
  constructor(public activatedroute:ActivatedRoute,public http:Http,service :CheckLoginService) {
    service.isValid();
   }

  ngOnInit() {
  
  this.activatedroute.queryParams.subscribe(param=>{
    if(param['college']){
    let query_college=param['college'];
    let data={
      "college":query_college
    };
    this.http.post(environment.url+'search/by_college',data).subscribe(res=>{
      this.student=res.json();
    });
    }
    if(param['subject']){
      let query_subject=param['subject'];
      let data={
        "subject":query_subject
      };
      this.http.post(environment.url+'search/by_subject',data).subscribe(res=>{
      this.student=res.json();
      });
    }
  });
  }

}
