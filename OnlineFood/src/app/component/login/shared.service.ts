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
  private Orderdata = new BehaviorSubject('');
  dataorder = this.Orderdata.asObservable();
  private Product = new BehaviorSubject('');
  Pdata= this.Product.asObservable();
  constructor() { }
  updateMessage(item:any){
    this.userData.next(item);
  }
  updatecategory(item:any){
    this.catData.next(item);
  }
  updateOrder(item:any){
    this.Orderdata.next(item);
  }
  updateProduct(item:any){
    this.Product.next(item);
  }
}
