import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'print-fee-receipt',
  templateUrl: './print-fee-receipt.component.html',
  styleUrls: ['./print-fee-receipt.component.css']
})
export class PrintFeeReceiptComponent implements OnInit {
  public student;
  public date=new Date();
  public dd;
  public instalment;
  public pd;
  public ad;
  public hide_btn:boolean=false;
  constructor(public http:Http,public activatedroute:ActivatedRoute) {
    this.student=[];
    this.dd=[];
    this.pd=[];
    this.instalment=[];
    this.ad=[];
   }
   print(){
    $("#print").hide();
     window.print();
    $("#print").show();
   }
  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params=>{
      this.http.post('http://localhost:3000/search/by_mobile',{mobile:params['mobile']}).subscribe(res=>{
        this.student=res.json();
        // console.log(res.json());
        if(res.json().package_opted=='')
        {
          this.student.package_opted='None';
        }
        for(let i in res.json().installments){
          this.ad[0]=res.json().total_fee-res.json().installments[0]-1000;
          this.ad[1]=res.json().total_fee-res.json().installments[0]-res.json().installments[1]-1000;
          this.instalment.push(res.json().installments[i]);
          if(res.json().due_date[i]==null){
            res.json().due_date[i]='None';
          }
          this.dd.push(res.json().due_date[i]);
          this.pd.push(res.json().pay_date[i]);
        }
      })
    })
  }
}
