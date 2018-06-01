import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'search-student-result',
  templateUrl: './search-student-result.component.html',
  styleUrls: ['./search-student-result.component.css']
})
export class SearchStudentResultComponent implements OnInit {
  student;
  constructor(public activatedroute:ActivatedRoute,public http:Http) { }

  ngOnInit() {
  
  this.activatedroute.queryParams.subscribe(param=>{
    if(param['college']){
    let query_college=param['college'];
    // this.http.get('http://localhost:3000/').subscribe(res=>{
    //   this.student=res.json();
    // });
    }
    if(param['subject']){
      let query_subject=param['subject'];
      // this.http.get('http://localhost:3000/').subscribe(res=>{
      // this.student=res.json();
      // });
    }
  });
  }

}
