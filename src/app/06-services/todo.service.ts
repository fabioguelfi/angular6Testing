import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

export class TodoService { 
  constructor(private http: Http) { 
  }

  add(todo) {
    return this.http.post('...', todo).map(r => r.json());
  }

  getTodos() { 
    return this.http.get('...').map(r => r.json());
  }

  delete(id) {
    return this.http.delete('...').map(r => r.json());
  }
}