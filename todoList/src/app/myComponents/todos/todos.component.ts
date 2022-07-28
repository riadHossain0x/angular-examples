import { Component, OnInit } from '@angular/core';
import { TodoEntity } from 'src/app/TodoEntity';
import { TodoStorage } from 'src/app/TodoStorage';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: TodoEntity[];
  todoStorage: TodoStorage;
  items: any;
  constructor() 
  {
    this.todoStorage = new TodoStorage();
    this.items = this.todoStorage.GetItem();
    this.todos = this.items;
  }

  ngOnInit(): void {
  }

  todoDelete(todo: TodoEntity): void
  {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.todoStorage.SaveItem(this.todos);
  }
  todoAdd(todo: TodoEntity): void
  {
    this.todos.push(todo);
    this.todoStorage.SaveItem(this.todos);
  }

  todoDone(todo: TodoEntity): void
  {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    this.todoStorage.SaveItem(this.todos);
  }

}
