import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $:any;
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
  college=[
    {
      name:'ABCD'
    },
    {
      name:'EFGH',
    },
    {
      name:'WXYZ'
    }
  ];
  constructor(public router:Router,public http:Http) { 
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/course/allcourse/').subscribe(res=>{
    this.subjects=res.json();
    });
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
      this.router.navigate(['/search-student-result'],{ queryParams: { x:'lol' }});
    }
    else if(y=='By College'){
      this.router.navigate(['/search-student-result'],{ queryParams: { x:'pol' }});
    }
    else if(y=='By Subject'){
      this.router.navigate(['/search-student-result'],{ queryParams: { x:'ldaasdssdsansl' }});
    }
    
  }
}
