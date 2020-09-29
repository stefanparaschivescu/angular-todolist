import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
    
   }

   getTodos () {
    return [
      {
        id:1,
        title:'laundry',
        completed: true
      },
      {
        id:2,
        title:'wash dishes',
        completed: false
      },
      {
        id:3,
        title:'repair car',
        completed: true
      },
      {
        id:4,
        title:'watch tv',
        completed: false
      },
    ]
   }
}
