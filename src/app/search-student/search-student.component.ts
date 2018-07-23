import { CheckLoginService } from './../check-login.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $:any;
import { environment } from './../../environments/environment';
@Component({
  selector: 'search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {
  subjects;
  criteria_college=false;
  criteria_mobile=false;
  criteria_subject=false;
  college;
  constructor(public router:Router,public http:Http,service :CheckLoginService) {
    service.isValid(); 
  }

  ngOnInit() {
    this.http.get(environment.url+'course/allcourse/').subscribe(res=>{
    this.subjects=res.json();
    });

    this.http.get(environment.url+'batch/get_college/all').subscribe(res=>{
      this.college=res.json();
    })
  }

  display(){
    this.criteria_college=false;
    this.criteria_mobile=false;
    this.criteria_subject=false;
    let y=$("select[name=type] option:selected").text();
    if(y=='By Mobile'){
      this.criteria_mobile=true;
    }
    else if(y=='By College'){
      this.criteria_college=true;
    }
    else if(y=='By Subject'){
      this.criteria_subject=true;
    }
  }
  submit(x){

    let y=$('select[name=type] option:selected').text();
    if(y=='By Mobile'){
      let x=$('#mobile').val();
      this.router.navigate(['/student-details'],{ queryParams: { mobile: x }});
    }
    else if(y=='By College'){
      let x=$('select[name=college] option:selected').text();
      this.router.navigate(['/search-student-result'],{ queryParams: { college:x }});
    }
    else if(y=='By Subject'){
      let x=$('select[name=subject] option:selected').text();
      this.router.navigate(['/search-student-result'],{ queryParams: { subject:x }});
    }
    
  }

}
