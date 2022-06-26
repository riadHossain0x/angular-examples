import { Component, OnInit } from '@angular/core';
import { TodoEntity } from 'src/app/TodoEntity';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: TodoEntity[];
  localItem: any;
  constructor() 
  {
    this.localItem = localStorage.getItem("todo.bak");
    if(this.localItem != null)
    {
      this.todos = JSON.parse(this.localItem);
    }
    else
    {
      this.todos = [];
    }

  }

  ngOnInit(): void {
  }

  todoDelete(todo: TodoEntity): void
  {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todo.bak",JSON.stringify(this.todos));
  }
  todoAdd(todo: TodoEntity): void
  {
    this.todos.push(todo);
    localStorage.setItem("todo.bak",JSON.stringify(this.todos));
  }

}
