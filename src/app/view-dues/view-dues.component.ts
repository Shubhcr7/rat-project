import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-view-dues',
  templateUrl: './view-dues.component.html',
  styleUrls: ['./view-dues.component.css']
})
export class ViewDuesComponent implements OnInit {
  students;
  constructor(public http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/search/duefee').subscribe(res=>{
    this.students=res.json();
    });
  }
  sendMail(x){
    let data={
      'subject':'maaaaka',
      'text':'nodemailer',
      'user':x
    }
    console.log(data);
    this.http.post('http://localhost:3000/email',data).subscribe(res=>{
      console.log(res.json());
    })
  }

}
