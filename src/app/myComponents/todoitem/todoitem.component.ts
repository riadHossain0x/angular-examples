import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoEntity } from 'src/app/TodoEntity';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todoItem: TodoEntity = new TodoEntity();
  @Output() todoDelete: EventEmitter<TodoEntity> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  DeleteItem(itemtodo: TodoEntity): void
  {
    this.todoDelete.emit(itemtodo);
  }

}
