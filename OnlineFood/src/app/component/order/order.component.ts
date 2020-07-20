import { Component, OnInit } from '@angular/core';
import { Order_P } from '../placeorder/order';
import { SharedService } from '../login/shared.service';
import { OrderService } from '../placeorder/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private sharedService:SharedService,
    private orderService:OrderService,
    private route:ActivatedRoute,
    private snackBar:MatSnackBar) { }
  Porderobj:Order_P =new Order_P();
  CurrentUser:any ={};
  CurrentProduct:any ={};
  CurrentOrder:any={};
  OrderList:any ={};
  OrderId:any ={};
  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.OrderId = this.route.snapshot.paramMap.get('id');
    }
    if(this.OrderId != null){
      this.orderService.getOneOrder(this.OrderId).subscribe(data =>{
        this.CurrentOrder = data;
      },
      err =>{console.log(err);
     })
   
    }
    this.getCurrentUser();
 
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

    Order(){
      this.Porderobj.name = this.CurrentUser.name;
      this.Porderobj.OrderId=this.CurrentOrder._id;
      this.Porderobj.ProductId = this.CurrentProduct._id;
      
      this.Porderobj.quantity= this.CurrentOrder._quantity;
      this.Porderobj.Total= this.CurrentOrder.quantity * this.CurrentOrder.FinalAmt;
      this.orderService.createPorder(this.Porderobj).subscribe(data =>{
       this.OrderList =data;
        console.log(data);
        this.snackBar.open(' Order Placed','', {
          duration: 2000,
        });
    })
   
    
  }

}
