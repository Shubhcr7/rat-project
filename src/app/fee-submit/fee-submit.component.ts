import { CheckLoginService } from './../check-login.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
declare var $:any;
@Component({
  selector: 'fee-submit',
  templateUrl: './fee-submit.component.html',
  styleUrls: ['./fee-submit.component.css']
})
export class FeeSubmitComponent implements OnInit {

  constructor(public http:Http,public router:Router,service :CheckLoginService) {
    service.isValid();
   }

  ngOnInit() {
  //   $('form input').on('keypress', function(e) {
  //     return e.which !== 13;
  // });
  }
  submit(x){
    let data={
      "mobile":x.value.mobile
    };
    this.http.post(environment.url+'search/by_mobile',data).subscribe(res=>{
  this.router.navigate(['./fee-submit-student'],{queryParams:{'mobile':x.value.mobile}});
  },err=>{
    if(err.status==404){
      swal("Oops!", "No such student is registered at RAT!", "error")
    }
  })


}
}
