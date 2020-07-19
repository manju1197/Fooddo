import { Component, OnInit } from '@angular/core';
import { Order_P } from '../placeorder/order';
import { SharedService } from '../login/shared.service';
import { OrderService } from '../placeorder/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private sharedService:SharedService,
    private orderService:OrderService,
    private snackBar:MatSnackBar) { }
  Porderobj:Order_P =new Order_P();
  CurrentUser:any ={};
  CurrentProduct:any ={};
  CurrentOrder:any={};
  OrderList:any ={};
  ngOnInit(): void {
    
    this.getCurrentUser();
    this.getOrder();
    this.getProduct();
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data => {
      this.CurrentUser =data}
    );
  }
getProduct(){
  this.sharedService.Pdata.subscribe(data => {
    this.CurrentProduct =data;
 
  });
}
getOrder(){
  this.sharedService.dataorder.subscribe(data => {
    this.CurrentOrder =data}
  );
}
    Order(){
      this.Porderobj.OrderId=this.CurrentOrder._id;
      this.Porderobj.ProductId = this.CurrentProduct._id;
      
      this.Porderobj.quantity= this.CurrentOrder._quantity;
      this.Porderobj.Total= this.CurrentOrder.quantity * this.CurrentOrder.finalAmount;
      this.orderService.createPorder(this.Porderobj).subscribe(data =>{
       this.OrderList =data;
        console.log(data);
        this.snackBar.open(' Order Placed','', {
          duration: 2000,
        });
    })
   
    
  }

}
