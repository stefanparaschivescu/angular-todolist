import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  httpUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  limit:string = '?_limit=7'

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> { 
    return this.http.get<Todo[]>(`${this.httpUrl}${this.limit}`)
  }

  toggleCompleted(todo: Todo):Observable<any> {
    const url =  `${this.httpUrl}/${todo.id}`;  
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo):Observable<Todo> {
    const url =  `${this.httpUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);  
  }

  addTodo(todo: Todo):Observable<Todo> {
    const url =  `${this.httpUrl}/${todo.id}`;
    return this.http.post<Todo>(this.httpUrl, todo, httpOptions);  
  }
}
