import { CheckLoginService } from './../check-login.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $:any;
import { environment } from './../../environments/environment';
@Component({
  selector: 'search-batch',
  templateUrl: './search-batch.component.html',
  styleUrls: ['./search-batch.component.css']
})
export class SearchBatchComponent implements OnInit {
  courses;
  constructor(public router:Router,public http:Http,service:CheckLoginService) {
    service.isValid();
   }

  ngOnInit() {
    $('form input').on('keypress', function(e) {
      return e.which !== 13;
  });
  
  this.http.get(environment.url+'course/allcourse').subscribe(res=>{
    this.courses=res.json();
  });
  }
  submit(x){
    let subject=$('select[name=subject] option:selected').text();
    let faculty=$('select[name=faculty] option:selected').text();
    this.router.navigate([ 'batch-search-result' ], { queryParams: { course: subject, faculty: faculty } });
  }

}
