import { Injectable } from '@angular/core';
import { Order, Order_P } from './order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Additem } from '../add-item/additem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  createOrder(model):Observable<Order>{
    return this.http.post<Order>('http://localhost:3001/api/order/add',model);
   
 }
 getOrder():Observable<Order[]>{
  return this.http.get<Order[]>('http://localhost:3001/api/order');
  }
  createPorder(model):Observable<Order_P>{
    return this.http.post<Order_P>('http://localhost:3001/api/porder/add',model);
   
 }
 getPorder():Observable<Order[]>{
  return this.http.get<Order[]>('http://localhost:3001/api/porder');
  }
  getOneOrder(id):Observable<Order>{
    return this.http.get<Order>('http://localhost:3001/api/order/'+id);
  }
}

