import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-bind',
  templateUrl: './two-way-bind.component.html',
  styleUrls: ['./two-way-bind.component.css']
})
export class TwoWayBindComponent implements OnInit {

  courses:any=[
    {
      name:'java',
      opted:false
    },
    {
      name:'aws',
      opted:true
    }
  ];
  constructor() { }

  myfunc()
  {
    this.courses.forEach(element => {
      element.opted=!element.opted;
    });
  }
  ngOnInit() {
  }

}
