import swal  from 'sweetalert';
import { Http } from '@angular/http';
import { CheckLoginService } from './../check-login.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'add-new-package',
  templateUrl: './add-new-package.component.html',
  styleUrls: ['./add-new-package.component.css']
})
export class AddNewPackageComponent implements OnInit {
  courses:any;
  content:String[]=[];
  
  constructor(public service:CheckLoginService,public http:Http) {
    this.service.isValid();
  }

  ngOnInit() {
    this.http.get(environment.url+'course/allcourse').subscribe(res=>{
      this.courses=res.json();
    });
  }
  submit(x)
  {
    let y=x.content;
    for(var z in y)
    {
      if(y[z]==true)
      {
        this.content.push(z);
      }
    }
    let swal_data={
      title:'Register new package '+x.name+' at RAT ?',
      text:'After registeration there will be a new package',
      icon:'info',
      buttons:['Cancel','Yes'],
      dangerMode:true
    }
    x.content=this.content;
  
    swal(swal_data).then((value)=>{
      if(value)
      {
            this.http.post(environment.url+'package/create_package',x).subscribe(res=>{
            swal("Success","New Package Added","Success");
            },err=>{
              swal("Error","Server error , package not added","Error");
            });
      }
      else{
        swal("You cancelled the registration ", "Registration didn't take place", "warning");
      }
    });




  }
}
