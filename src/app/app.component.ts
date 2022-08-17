import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h4>{{person.Id | number:'1.2-2'}}</h4>
      <h4>{{person.Name | summary}}</h4>
      <h4>{{person.Department | uppercase}}</h4>
      <h4>{{person.BOD | date}}</h4>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomPipe'; 
  person = {
    Id: 212010160,
    Name: "Riad",
    Department: "cse",
    BOD: "05/04/1999"
  };
}
