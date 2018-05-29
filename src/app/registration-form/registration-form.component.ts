import { element } from 'protractor';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  constructor(private http:Http) { 
  }
  today:string;
  fee:number=0;
  paidfee:number=0;
  feedue:number=this.fee-this.paidfee;
  feedue_flag:boolean=false;
  //individual course modal
  courses:any=[
    {
    name:'Core_Java',
    fee:7000,
    opted:false
    },
    {
      name:'Php',
      fee:5000,
      opted:false
    },
    {
      name:'Oracle_SQL',
      fee:6000,
      opted:false
    },
    {
      name:'Bigdata_Hadoop',
      fee:15000,
      opted:false
    },
    {
      name:'AWS',
      fee:6000,
      opted:false
    },
    {
      name:'AdminI',
      fee:7000,
      opted:false
    },
];
//package modal
packages:any=[
{
name:'Platinum Package',
content:'Advance_Java,Oracle_SQL,Android,Php,Core_Java',
fees:22500
},
{
name:'Gold Package',
content:'AWS,Bigdata_Hadoop,AdminI,AdminII',
fees:30000
},
{
name:'Super Saver',
content:'Bigdata_Hadoop,AWS,Android,Php',
fees:20000
}
]; 
  package(x){

    this.courses.forEach(element => {
    element.opted=false;      
    });

    this.packages.forEach(pack => {
      if(x==pack.name)
      {
        let array=pack.content.split(',');
        array.forEach(element => {
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
       y=element.content.split(',');
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
  ngOnInit() {

    $('form input').on('keypress', function(e) {
      return e.which !== 13;
  });

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
    submit=window.confirm("Are you sure to submit the form ?");
    if(submit){
      let y=JSON.stringify(x.value.individual_courses);
      let z=JSON.parse(y);
    }
  }
}
