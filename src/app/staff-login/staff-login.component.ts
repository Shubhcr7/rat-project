
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
declare var $:any;
@Component({
  selector: 'staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  constructor(public http:Http ,public router:Router) { }

  ngOnInit() {
  }
submit(x){
  let y=$('select[name=branch] option:selected').text();
  let br;
  if(y=='Tonk Road')
   {
     br='tr';
   }
  else if(y=='Pratap Nagar')
  {
    br='pn';
  } 
this.http.post(environment.url+br+'/authenticate',{'pwd':x.pwd}).subscribe(res=>{
  swal("Login Successful","Successfully logged into "+y+" branch","success");
  sessionStorage.setItem(environment.branch,br);
  this.router.navigate(['./']);
  location.reload();
},err=>{
  if(err.status==403){
    swal("Error Logging In","Make sure the password is correct","error");
  }
})
}
}

