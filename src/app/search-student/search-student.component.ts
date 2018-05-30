import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  constructor(public router:Router) { 
  }

  ngOnInit() {
  }

  submit(x){
    // this.router.navigate(['/search-student/user'],{ queryParams: { }});
    let y=$("select option:selected").text();
    console.log(y,x);
  }
}
