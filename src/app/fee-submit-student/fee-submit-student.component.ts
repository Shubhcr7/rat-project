import { MypipePipe } from './../mypipe.pipe';
import swal from 'sweetalert';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'fee-submit-student',
  templateUrl: './fee-submit-student.component.html',
  styleUrls: ['./fee-submit-student.component.css']
})
export class FeeSubmitStudentComponent implements OnInit {
public student:any;
public instalment;
public dd;
public pd;
public third:boolean=true;
public show_date:boolean=true;
public show_form:boolean=true;
public apaid:number;
constructor(public activatedroute:ActivatedRoute,public http:Http,public router:Router) {
    this.student={} ;
    this.instalment=[];
    this.dd=[];
    this.pd=[];
    this.apaid=0;
  }

  ngOnInit() {
 this.activatedroute.queryParams.subscribe(params=>{
 this.http.post('http://localhost:3000/search/by_mobile',{'mobile':params['mobile']}).subscribe(res=>{
   this.student=res.json();
  //  console.log(res.json());
    if(res.json().fee_due==0){
      swal("Student has already deposited the entire fee");
      this.show_form=false;
    }
   for(let i in res.json().installments){
    this.instalment.push(res.json().installments[i]);
    this.dd.push(res.json().due_date[i]);
    this.pd.push(res.json().pay_date[i]);
  }
  });
});   

}
disableDate(){
  this.show_date=true;

  if(this.apaid>=this.student.fee_due)
  { 
    this.show_date=false;
  }

  if(this.instalment.length==2){
    this.third=false;
  }
}
submit(x){
  let data={
    "mobile":this.student.mobile,
    "due_date":x.value.due_date,
    "apaid":x.value.apaid
  }
  let swal_data={
    title:'Pay Fees amounting to '+x.value.apaid+' ?',
    text:'Make sure to recheck the details',
    icon:'info',
    buttons:['Recheck','Yes'],
    dangerMode:true
  };
  swal(swal_data).then((value)=>
  {
    if(value){
      this.http.post('http://localhost:3000/update/fee_details',data).subscribe(res=>{
        swal("Fee paid","Deposited fees amounting to "+data.apaid,"success");
        this.router.navigate(['']);
      },err=>{
        if(err.status==409){
        swal("ERROR","We only allow maximum 3 instalments , please provide the right amount","warning");
        }else
        {
          swal('Server Error','The fee was not deposited ,please try again','warning');
        }
      });
    }
   else{
     swal("Recheck","Go through the details again","info");
   } 
});
    
  }
}


