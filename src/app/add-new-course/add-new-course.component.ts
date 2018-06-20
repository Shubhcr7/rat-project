import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { CheckLoginService } from './../check-login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent implements OnInit {

  constructor(public service:CheckLoginService,public http:Http,public router:Router) { 
    this.service.isValid();
  }
  data={
    name:'',
    fees:'',
    opted:false
  }
  ngOnInit() {
  }

  submit(x)
  {
    this.data.fees=x.fees;
    this.data.name=x.name;
    let swal_data={
      title:'Add course '+x.name+' with fees '+x.fees +' at RAT ?',
      text:'Please review the name and fees again if you want',
      icon:'info',
      buttons:['Cancel','Yes'],
      dangerMode:true
    }
    swal(swal_data).then((value)=>{
      if(value)
      {
       this.http.post(environment.url+'course/add_course/',this.data).subscribe(res=>{
        swal("Success","Course was added","success");
        this.router.navigate(['/']);
       },err=>{
        swal("Error","Course was not added due to server error","error");
       });
      }
    });

  }

}
