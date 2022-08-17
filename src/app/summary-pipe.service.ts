import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipeService implements PipeTransform {

  constructor() { }
  
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }
}
