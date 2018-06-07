import { CheckLoginService } from './../check-login.service';
import  swal  from 'sweetalert';
import { environment } from './../../environments/environment';
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
constructor(public http:Http,public router:Router,service: CheckLoginService) {
  service.isValid();
  http.get(environment.url+'course/allcourse/').subscribe(res=>{
    this.subjects=res.json();
  })
 }

getValidStudents(x){
  let y=environment.url+'batch/'+x;

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

  let swal_data={
    title:'Register the batch '+x.value.name+' at RAT ?',
    text:'Review the students added to the batch if you want to',
    buttons:['Cancel','Yes'],
    dangerMode:true
  }
  swal(swal_data).then(value=>{
    if(value){
      let w:string[]=[];
      let y=x.value.batch_students;
      for(let z in y){
        if(y[z]){
        w.push(z);
      }
    }
  x.value.batch_students=w;
  let ab=x.value;
this.http.post(environment.url+'batch/create_batch',ab).subscribe(res=>{
  swal("Registered","The batch was successfully made","success");
  let router:Router
  this.router.navigate(['./'],{ queryParams: { }});
},err=>{
  swal("Failure","The Batch Registration Failed Due To Server Error","error");
});

}
  else{
    swal("Warning","You cancelled the batch registraion","warning");
  }  
  });
}
ngOnInit() {

 
  $('form input').on('keypress', function(e) {
    return e.which !== 13;
  })
}

}
