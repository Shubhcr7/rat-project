import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {
  constructor(private http:Http) { 
  }
  submit(x){
    console.log(x.value);
  }
  ngOnInit() {
  }

}
