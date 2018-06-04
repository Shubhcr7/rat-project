import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { environment } from '../../environments/environment';
var students:any; 
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  
  public search;
  public students;
  constructor(public http:Http,public router:Router) { 
    students=[];
    this.search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        :students.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  }

  ngOnInit() {
    this.http.get(environment.url+'getAll').subscribe(res=>{
    students=res.json();
    // console.log(students);
    })
  } 
submit(x){
  this.router.navigate([ 'student-details' ], { queryParams: { name: x.value.name} });

}
}
