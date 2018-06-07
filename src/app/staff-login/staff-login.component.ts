import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
submit(x){
  console.log(x);
  if(x.branch=='tr' && x.pwd=='1234'){
    sessionStorage.setItem(environment.branch,'tr');
  }
}
}
