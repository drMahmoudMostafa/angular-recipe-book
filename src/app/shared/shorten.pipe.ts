import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, minLength: number = 50): any {
    if (value.length > minLength) {
      return value.substr(0, minLength) + '...' ;
    } else {
      return value;
    }
  }

}
