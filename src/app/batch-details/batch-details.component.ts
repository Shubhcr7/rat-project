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
  constructor(public http:Http,public activatedroute: ActivatedRoute) {
  console.log(this.batch); 
  }

  ngOnInit() {
  this.activatedroute.queryParams.subscribe(param=>{
    let name=param['name'];
    let faculty=param['faculty'];
    let data={
      faculty:faculty,
      name:name
    }
    console.log(data);
    this.http.post('http://localhost:3000/batch/search_one_batch',data).subscribe(res=>{
      this.batch=res.json(); 
      console.log(res.json());
    });
  })
  }

}
