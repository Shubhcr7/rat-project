import { Router } from '@angular/router';
import { element } from 'protractor';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

declare var $:any;
import swal from 'sweetalert';
@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  today:string;
  fee:number=0;
  paidfee:number=0;
  feedue:number=this.fee-this.paidfee;
  feedue_flag:boolean=false;
  packages:any;
  courses:any;

  
  ngOnInit() {

    $('form input').on('keypress', function(e) {
      return e.which !== 13;
  });
  }

  
  constructor(public http:Http,public router:Router) {
    http.get(environment.url+'package/allpackage/').subscribe(res=>{
      this.packages=res.json();
    });
    
    http.get(environment.url+'course/allcourse').subscribe(res=>{
      this.courses=res.json();
    }); 
  }

  package(x){

    this.courses.forEach(element => {
    element.opted=false;      
    });

    this.packages.forEach(pack => {
      if(x==pack.name)
      {
        // let array=pack.content.split(',');
        pack.content.forEach(element => {
          this.courses.forEach(course => {
            if(element==course.name)
            {
              course.opted=true;
            }
          });
        });
      }
    });
  }

  fees()
  {
    this.fee=0;
    let y;
    let x=$("select option:selected").text();
    if(x){

    if(x=='None'){
      this.courses.forEach(course => {
        if(course.opted){
        this.fee=this.fee + course.fee;
        }
      });
    }
    else{
    this.packages.forEach(element => {
      if(x==element.name)
      {
       this.fee=element.fees;
       y=element.content;
      }
    });
    
    this.courses.forEach(course => {
     if( y.indexOf(course.name)==-1 && course.opted==true)
     {
       this.fee=this.fee + course.fee;
      // console.log(course.name);
     }
     
    });
    }
}
else{
  this.fee=0;
}
  }


  findDueFee()
  {
    this.feedue=this.fee-this.paidfee;
    if(this.feedue>0)
    {
      this.feedue_flag=true;
    }
    else{
      this.feedue_flag=false;
    }
  }
  
  getDate(){
    let now = new Date();

    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    
     this.today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    
    $('#formdate').val(this.today);
  }
  submit(x){
    let submit:boolean;
    let swal_data={
      title:'Register '+x.value.name+' at RAT ?',
      text:'After registeration the student will be a part of RAT',
      icon:'info',
      buttons:['Cancel','Yes'],
      dangerMode:true
    }
    swal(swal_data).then((value)=>{
      if(value)
      {
        {
          let y=x.value.individual_courses;
          let w:string[]=[];
         for(let i in y)
         {
           if(y[i])
           {
             w.push(i);
          }
         }
        x.value.fee_paid=1000;
        x.value.fee_due=x.value.total_fee-1000;
        x.value.individual_courses=w;
        if(x.value.package_opted=='None'){
          x.value.package_opted='';
        }
        this.http.post(environment.url+'register/add_student',x.value).subscribe(
          res=>{
            console.log(res.status);
            console.log(res.statusText);
            swal("Registration Done !", "The student was successfully registered at RAT !", "success");
          },err=>{
            if(err.status==409){
              swal("Error","This student is already registered at RAT","error");
            }
          }
        );
        this.router.navigate(['']);
        } 
      }
      else{
        swal("You cancelled the registration ", "Registration didn't take place", "warning");
      }
    });
  }
}
