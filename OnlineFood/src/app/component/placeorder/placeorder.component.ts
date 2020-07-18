import { Component, OnInit } from '@angular/core';
import { AdditemService } from '../add-item/additem.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Order, Order_P } from './order';
import { SharedService } from '../login/shared.service';
import { OrderService } from './order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})
export class PlaceorderComponent implements OnInit {

  constructor(private addService:AdditemService,
    private fb:FormBuilder,
    private sharedService:SharedService,
    private orderService:OrderService,
    private snackBar:MatSnackBar) { }
arrayList:any ={};
orderList:any={};
ProductForm:FormGroup;
Orderobj:Order= new Order();
Porderobj:Order_P =new Order_P();
CurrentUser:any={};
CurrentProduct:any={};
CurrentOrder:any={};
  ngOnInit(): void {
    this.addService.getItem().subscribe(data =>{
      this.arrayList = data;
      console.log(this.arrayList);

  })
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
    this.arrayList =data;
  }
  );
}
getOrder(){
  this.sharedService.dataorder.subscribe(data => {
    this.CurrentOrder =data}
  );
}
createForm(){
 this.ProductForm = this.fb.group({
   quantity:['',Validators.required],
   total:['',Validators.required],
   discount:['',Validators.required]
 })
}
PlaceOrder(){
  this.Orderobj.userId= this.CurrentUser._id;
  this.Orderobj.Calculated_Amt=this.arrayList.price;
  this.Orderobj.discount= this.ProductForm.value.discount;
  this.Orderobj.finalAmount= this.arrayList.price - this.ProductForm.value.discount;
  this.orderService.createOrder(this.Orderobj).subscribe(data =>{
    this.arrayList = data;
    console.log(this.arrayList);

}),
this.orderService.getOrder().subscribe(data =>{
  this.sharedService.updateOrder(data);
})

this.Porderobj.OrderId=this.CurrentOrder._id;
this.Porderobj.ProductId = this.CurrentProduct._id;

this.Porderobj.quantity= this.ProductForm.value.quantity;
this.Porderobj.Total= this.ProductForm.value.quantity * this.Orderobj.finalAmount;
this.orderService.createPorder(this.Porderobj).subscribe(data =>{
 this.orderList =data;
  console.log(data);
  this.snackBar.open(' Order Placed','', {
    duration: 2000,
  });
})
}
}
