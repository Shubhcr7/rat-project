import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'batch-search-result',
  templateUrl: './batch-search-result.component.html',
  styleUrls: ['./batch-search-result.component.css']
})
export class BatchSearchResultComponent implements OnInit {

  batch;
  constructor(public http:Http,public activatedroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(param=>{
      let subject=param['course'];
      let faculty=param['faculty'];
      let data={
        faculty:faculty,
        subject:subject
      }
      this.http.post('http://localhost:3000/batch/search_batch',data).subscribe(res=>{
        this.batch=res.json(); 
        });
    })
    }
}
