import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertRupee',
  standalone: true
})
export class ConvertRupeePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const [x]=args;
    return value*x;
  }

}
