import { CheckLoginService } from './../check-login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { environment } from '../../environments/environment';
var students:any; 
declare var $:any;
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  public branch;
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
    $("#logout").hide();
    if(sessionStorage.getItem(environment.branch)=='tr'){
      this.branch='Tonk Road';
    }
    else if(sessionStorage.getItem(environment.branch)=='pn'){
      this.branch='Pratap Nagar';
    }
    if(this.branch=='Tonk Road' || this.branch=='Pratap Nagar'){
    $("#logout").show();
    }
    this.http.get(environment.url+'getAll').subscribe(res=>{
    students=res.json();
    // console.log(students);
    })
  } 
submit(x){
  this.router.navigate([ 'student-details' ], { queryParams: { name: x.value.name} });
  // location.reload();

}
logout(){
  
  let swal_data={
    title:'Logout ?',
    text:'You will need to login again to access the data',
    icon:'info',
    buttons:['Cancel','Yes'],
    dangerMode:true
  }
  swal(swal_data).then((value)=>{
    if(value){
      sessionStorage.clear();
      $('#logout').hide();
      swal("Successfully logged out","You have been successfully logged out","success");
      this.router.navigate(['./staff-login']);
    }
    else{
      swal("Did not log out","You choose not to log out","info");
    }
  })
}
}
