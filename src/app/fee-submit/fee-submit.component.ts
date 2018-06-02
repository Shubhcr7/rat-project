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
  ispresent:boolean=false;
  student;
  constructor(public http:Http) { }

  ngOnInit() {
  //   $('form input').on('keypress', function(e) {
  //     return e.which !== 13;
  // });
  }
  submit(x){
    let data={
      "mobile":x.value.mobile
    };
    this.http.post('http://localhost:3000/search/by_mobile',data).subscribe(res=>{
  this.student=res.json();
  this.ispresent=true;
  },err=>{
    if(err.status==404){
      this.ispresent=false;
      swal("Oops!", "No such student is registered at RAT!", "error")
    }
  })


}
}
