import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import {Todo} from '../models/Todo'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   todosUrl:string = 'http://semikun-001-site1.itempurl.com/api/todoes';

  constructor(private http:HttpClient) { }
 
  // get Todos
  getTodos(): Observable<Todo[]>{
  return this.http.get<Todo[]>(`${this.todosUrl}`);
  }

   // add Todo
   addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl,todo,httpOptions)
  }

  // toggle completed 
  UpdateTodos(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put<Todo>(url,todo,httpOptions)
  }

  // delete todo
  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url,httpOptions)
  }
}
