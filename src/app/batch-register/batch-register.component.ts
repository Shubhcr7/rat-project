import { element } from 'protractor';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-batch-register',
  templateUrl: './batch-register.component.html',
  styleUrls: ['./batch-register.component.css']
})
export class BatchRegisterComponent implements OnInit {

 //subjects model comes here
 subjects;
students;
validstudents;
constructor(http:Http) {
  http.get('http://localhost:3000/course/allcourse/').subscribe(res=>{
    this.subjects=res.json();
  })
 }
getValidStudents(x){
  // this.http('http://localhost:3000/course')
  this.students=[
    {
    name:'Saransh Jain',
    individual_courses:['Bigdata_Hadoop','AdminII','Php']
    },
    {
      name:'Shubham Sharma',
      individual_courses:['Core_Java','Php','AdminII','Android']
    },
    {
      name:'Kunal Mittal',
      individual_courses:['AdminII','Core_Java','Advance_Java']
    }
  ];
  this.validstudents=null;
  this.students.forEach(element => {
  let y=$("select option:selected").text();
    for(var i in element.individual_courses)
    {
      var x=element.individual_courses[i];
      if(y===x)
      {
        
      }
    }
    }
  );
}
ngOnInit() {
}

submit(x){
  console.log(x.value);
}

}
