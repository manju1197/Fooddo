import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { Additem } from './additem';
import { Category } from './category';
import { CategoryComponent } from './category/category.component';

@Injectable({
  providedIn: 'root'
})
export class AdditemService {

  constructor(private http:HttpClient) { }
  getItem():Observable<Additem[]>{
    return this.http.get<Additem[]>('http://localhost:3001/api/menu');
    }
    
    createItem(model):Observable<Additem>{
      return this.http.post<Additem>('http://localhost:3001/api/menu/list',model);
     
   }
   updateItem(model):Observable<Additem>{
    return this.http.put<Additem>('http://localhost:3001/api/menu/'+model._id,model); 
   }
  
   createCategory(model):Observable<Category>{
    return this.http.post<Category>('http://localhost:3001/api/category/add',model);
   
 }
 getCategory():Observable<Category[]>{
  return this.http.get<Category[]>('http://localhost:3001/api/category');
 
}
getOneProduct(id):Observable<Additem>{
  return this.http.get<Additem>('http://localhost:3001/api/menu/'+id);
}
getOneItem(id):Observable<Additem>{
  return this.http.get<Additem>('http://localhost:3001/api/menu/'+id);
}
getMyItem(id){
  return this.http.get<Additem>(`http://localhost:3001/api/menu/item/${id}`);
}

}
