import { environment } from './../environments/environment';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {

  constructor(http:Http,public router:Router) {
  }
  isValid()
  {
    if(sessionStorage.getItem(environment.branch)!='tr' && sessionStorage.getItem(environment.branch)!='pn' ){
      this.router.navigate(['./staff-login']);
    }
  }
}
