import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  users!: any[];

  ngOnInit(): void {
    this.createDb();
  }

  createDb() {
    this.users = [
      { id: 1, name: 'admin', password: 'admin', role: 'admin' },
      { id: 2, name: 'Abe', password: 'password1', role: 'user' },
      { id: 3, name: 'Alice', password: 'password2', role: 'user' },
    ];
    return {users: this.users};
  }
}
