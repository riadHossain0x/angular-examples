import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Guid } from 'guid-typescript';
import { TodoEntity } from 'src/app/TodoEntity';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  @Output() addTodo: EventEmitter<TodoEntity> = new EventEmitter();

  title: any;
  description: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const todoEntity = {
      id: Guid.create().toString(),
      title: this.title,
      desc: this.description,
      active: true
    }
    this.addTodo.emit(todoEntity);
    // console.log(todoEntity);
  }

}
function output() {
  throw new Error('Function not implemented.');
}

