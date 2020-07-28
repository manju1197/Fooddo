import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userData = new BehaviorSubject('');
  currentData = this.userData.asObservable();
  private catData = new BehaviorSubject('');
  typeData = this.catData.asObservable();
  private order = new BehaviorSubject('');
  orderProduct = this.order.asObservable();
  private Product = new BehaviorSubject('');
  Pdata= this.Product.asObservable();
  private hotel = new BehaviorSubject('');
  restaurant = this.hotel.asObservable();
  constructor() { }
  updateMessage(item:any){
    this.userData.next(item);
  }
  updatecategory(item:any){
    this.catData.next(item);
  }
 updateOrder(item:any){
   this.order.next(item);
 }
  updateProduct(item:any){
    this.Product.next(item);
  }
  updateHotel(item:any){
    this.hotel.next(item);
  }
}
