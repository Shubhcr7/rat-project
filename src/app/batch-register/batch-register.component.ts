import { Router } from '@angular/router';
import { element } from 'protractor';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'batch-register',
  templateUrl: './batch-register.component.html',
  styleUrls: ['./batch-register.component.css']
})
export class BatchRegisterComponent implements OnInit {

 //subjects model comes here
 subjects;
students;
today;
constructor(public http:Http,public router:Router) {
  http.get('http://localhost:3000/course/allcourse/').subscribe(res=>{
    this.subjects=res.json();
  })
 }

getValidStudents(x){
  let y='http://localhost:3000/batch/'+x;

  this.http.get(y).subscribe(res=>{
    console.log(res);
    this.students=res.json();
  },err=>{
    console.log(err);
  });
  this.generateCheckBox();
}
generateCheckBox(){
  
}


getDate(){
  let now = new Date();

  let day = ("0" + now.getDate()).slice(-2);
  let month = ("0" + (now.getMonth() + 1)).slice(-2);
  
   this.today = now.getFullYear()+"-"+(month)+"-"+(day) ;
  
  $('#date').val(this.today);
}

submit(x){
  if(window.confirm('Are you sure to add this batch ?'))
  {
  let w:string[]=[];
  let y=x.value.batch_students;
  for(let z in y){
    if(y[z]){
      w.push(z);
    }
  }
x.value.batch_students=w;
console.log(x.value);
let ab=x.value;
this.http.post('http://localhost:3000/batch/create_batch',ab).subscribe(res=>{
  // console.log(res.json());
});
window.alert('The batch was successfully registered');
let router:Router
this.router.navigate(['/registration'],{ queryParams: { }});
  }
  else{
    return;
  }

}
ngOnInit() {

 
  $('form input').on('keypress', function(e) {
    return e.which !== 13;
  }
}

}
