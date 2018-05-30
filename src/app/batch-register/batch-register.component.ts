import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-register',
  templateUrl: './batch-register.component.html',
  styleUrls: ['./batch-register.component.css']
})
export class BatchRegisterComponent implements OnInit {

 //subjects model comes here
 subjects=[
  {
    name:'Core_Java'
  },
  {
    name:'Oracle_SQL'
  },
  {
    name:'Php'
  },
  {
    name:'AdminI'
  },
  {
    name:'Android'
  },
  {
    name:'Python'
  },
];
//eligible students
eligible=[
{

},
{

},
{

},
{

},
];
constructor() { }

ngOnInit() {
}

submit(x){
  console.log(x.value);
}

}
