import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student:any;
  constructor(public http:Http,public activatedroute:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    let y,z
    this.activatedroute.queryParams.subscribe(param=>{
      if(param['mobile']){
        let data={
          "mobile":param['mobile']
        }
        this.http.post(environment.url+'search/by_mobile',data).subscribe(res=>{
          this.student=res.json();
        },err=>{
          swal("Not found","No such student is registered at RAT ","error");
          this.router.navigate(['./']);
        });
      }
     else if(param['name']){
      let data={
        "name":param['name']
      } 
      this.http.post(environment.url+'search/by_name',data).subscribe(res=>{
    this.student=res.json();
  });
    } 
    });  
  
  }

}
