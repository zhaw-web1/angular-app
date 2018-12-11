import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newLine'
})
export class NewLinePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value
      .replace(new RegExp('\n', 'g'), '<br />');
  }

}
