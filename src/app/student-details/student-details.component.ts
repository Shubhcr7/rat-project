import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student:any;
  constructor(public http:Http,public activatedroute:ActivatedRoute) { }

  ngOnInit() {
    let y;
    this.activatedroute.queryParams.subscribe(param=>{
      y=param['mobile'];
    });
    let data={
      "mobile":y
    }
  this.http.post('http://localhost:3000/search/by_mobile',data).subscribe(res=>{
    this.student=res.json();
  });
  }

}
