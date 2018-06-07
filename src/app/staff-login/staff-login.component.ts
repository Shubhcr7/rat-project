import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
submit(x){
  console.log(x); //auth to go here
  sessionStorage.setItem(environment.branch,x.branch);
}
}

