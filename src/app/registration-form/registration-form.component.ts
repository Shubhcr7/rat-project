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
    fee:7000
    },
    {
      name:'Php',
      fee:5000
    },
    {
      name:'Oracle_SQL',
      fee:6000
    },
    {
      name:'Bigdata_Hadoop',
      fee:15000
    },
    {
      name:'AWS',
      fee:6000
    },
    {
      name:'AdminI',
      fee:7000
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

    if(x=='None')
    {
      this.courses.forEach(element => {
        $("#"+element.name).prop("checked",false);
        $("#"+element.name).prop("disabled",false);
      });  
    }

    this.courses.forEach(element => {
      $("#"+element.name).prop("checked",false);
      $("#"+element.name).prop("disabled",false);
    });
    this.packages.forEach(element => {
      
    if(element.name==x)  
      {
        let array=element.content.split(',');
        // console.log(array);
        array.forEach(element => {
          $("#"+element).prop( "checked", true );
          $("#"+element).prop( "disabled", true );
        });
      }  
    });
    
  }

  fees()
  {
    this.fee=0;
   let x=$("select option:selected").text();
   this.packages.forEach(element => {
     if(x==element.name)
     {
       this.fee=element.fees;
     }
   });
   this.courses.forEach(element => {
     if($("#"+element.name).prop('checked') && !$("#"+element.name).prop('disabled'))
     {
       this.fee=this.fee+element.fee;
     }
   });
  }

  findDueFee()
  {
    this.feedue=this.fee-this.paidfee;
    if(this.feedue>0)
    {
      this.feedue_flag=true;
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
      console.log(x.value);
    }
  }
}
