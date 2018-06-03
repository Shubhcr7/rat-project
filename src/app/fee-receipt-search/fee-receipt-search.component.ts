import swal from 'sweetalert';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit,} from '@angular/core';
@Component({
  selector: 'fee-receipt-search',
  templateUrl: './fee-receipt-search.component.html',
  styleUrls: ['./fee-receipt-search.component.css']
})
export class FeeReceiptSearchComponent implements OnInit {

  constructor(public router:Router,public http:Http) { }

  ngOnInit() {
  }
submit(x){
  this.http.post('http://localhost:3000/search/by_mobile',{'mobile':x.value.number}).subscribe(res=>{
    this.router.navigate(['./fee-receipt-print'],{queryParams:{mobile:x.value.number}});},err=>{
      swal("Not Found","No such students exist at RAT ","error");
    });  
}}