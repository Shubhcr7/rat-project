import { environment } from './../../environments/environment';
import { CheckLoginService } from './../check-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(service:CheckLoginService) {
    service.isValid();
   }

  ngOnInit() {
  }

}
