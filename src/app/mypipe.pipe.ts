import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
    return 'None';
    else {
      let varPipe=new DatePipe("en-US");
      value=varPipe.transform(value,"dd-MMM-yyyy");
      return value;
    }
  }

}
