import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {User} from './login';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  getUser():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3001/api/users');
    }
    createUser(model):Observable<User>{
      return this.http.post<User>('http://localhost:3001/api/users/signup',model);
     
   }
   loginUser(model):Observable<User>{
    return this.http.post<User>('http://localhost:3001/api/users/login',model);
   
 }
}


