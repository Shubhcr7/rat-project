import { CheckLoginService } from './../check-login.service';
import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {
  batch;
  constructor(public http:Http,public activatedroute: ActivatedRoute,service:CheckLoginService) {
    service.isValid();
  }

  ngOnInit() {
  this.activatedroute.queryParams.subscribe(param=>{
    let name=param['name'];
    let faculty=param['faculty'];
    let data={
      faculty:faculty,
      name:name
    }
    this.http.post(environment.url+'batch/search_one_batch',data).subscribe(res=>{
      this.batch=res.json();
      console.log(res.json());
    });
  })
  }

}
