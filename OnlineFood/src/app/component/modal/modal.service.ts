import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Modal } from './modal';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private http:HttpClient) { }
  getHotel():Observable<Modal[]>{
    return this.http.get<Modal[]>('http://localhost:3001/api/hotel');
    }
    
    createHotel(model):Observable<Modal>{
      return this.http.post<Modal>('http://localhost:3001/api/hotel/add',model);
     
   }
   updateHotel(model):Observable<Modal>{
    return this.http.put<Modal>('http://localhost:3001/api/hotel/add/'+model._id,model); 
   }
}
