import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService: TodoService) { }


  ngOnInit(): void {
     this.todoService.getTodos().subscribe(todos => {
       this.todos = todos;
     });
  }

  deleteTodo(todo:Todo){
    // delete from UI
   this.todos = this.todos.filter(t => t.id !== todo.id );
  //  delete from server
   this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
