import { Component, OnInit } from '@angular/core';
import { TodoEntity } from 'src/app/TodoEntity';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: TodoEntity[];
  constructor() 
  {
    this.todos = [
      {
        id:1,
        title:"Title 1",
        desc:"Description 1",
        active:true
      },
      {
        id:2,
        title:"Title 2",
        desc:"Description 2",
        active:true
      },
      {
        id:3,
        title:"Title 3",
        desc:"Description 3",
        active:true
      },
      {
        id:4,
        title:"Title 4",
        desc:"Description 4",
        active:true
      }
    ]
  }

  ngOnInit(): void {
  }

  todoDelete(todo: TodoEntity): void
  {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  todoAdd(todo: TodoEntity): void
  {
    this.todos.push(todo);
    console.log(todo);
  }

}
