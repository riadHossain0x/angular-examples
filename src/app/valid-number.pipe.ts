import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validNumber'
})
export class ValidNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
