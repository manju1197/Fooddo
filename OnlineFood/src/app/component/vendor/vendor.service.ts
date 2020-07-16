import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Additem } from '../add-item/additem'

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }
  getItem():Observable<Additem[]>{
    return this.http.get<Additem[]>('http://localhost:3001/api/menu');
    }
    
    createItem(model):Observable<Additem>{
      return this.http.post<Additem>('http://localhost:3001/api/menu/list',model);
     
   }
   l
}
