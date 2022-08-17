import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  students = [
    {
      id: 1,
      name: 'Riad',
      roll: 212010160,
      department: 'CSE',
      Batch: 10 
    }
  ]
  constructor() { }
}
