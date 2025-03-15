import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly http = inject(HttpClient)

  loadUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
}
