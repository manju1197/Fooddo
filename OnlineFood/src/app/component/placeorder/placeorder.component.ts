import { Component, OnInit } from '@angular/core';
import { AdditemService } from '../add-item/additem.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Order, Order_P } from './order';
import { SharedService } from '../login/shared.service';
import { OrderService } from './order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

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
    private snackBar:MatSnackBar,
    private route:ActivatedRoute,
    private router:Router,
   ) { }
ProductId:any ={};
productdetails:any={};
arrayList:any ={};
orderList:any={};
ProductForm:FormGroup;
Orderobj:Order= new Order();
Porderobj:Order_P =new Order_P();
CurrentUser:any={};
CurrentProduct:any={};
CurrentOrder:any={};
Id:any;
  ngOnInit(): void {
 if(this.route.snapshot.paramMap.get('id')){
   this.ProductId = this.route.snapshot.paramMap.get('id');
 }
 if(this.ProductId != null){
   this.addService.getOneProduct(this.ProductId).subscribe(data =>{
     this.productdetails = data;
     console.log(this.productdetails);
     this.sharedService.updateProduct(data);
   },
   err =>{console.log(err);
  })

 }
  this.createForm();
    this.getCurrentUser();

  
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data => {
      this.CurrentUser =data}
    );
  }

createForm(){
 this.ProductForm = this.fb.group({
   quantity:['',Validators.required],
  discount:['',Validators.required]
 })
}
PlaceOrder(){
  this.Orderobj.name= this.productdetails.name;
  this.Orderobj.UserId= this.CurrentUser._id;
  this.Orderobj.CalculatedAmt=this.productdetails.price;
  this.Orderobj.discount= 0;
  this.ProductForm.value.discount = 0;
  this.Orderobj.FinalAmt= this.productdetails.price - this.ProductForm.value.discount;
  this.Orderobj.quantity = this.ProductForm.value.quantity;
  this.orderService.createOrder(this.Orderobj).subscribe(data =>{
    this.arrayList = data;
    // console.log(this.arrayList);
    this.sharedService.updateOrder(data);
    this.snackBar.open(' Order Added','Successfully', {
      duration: 200,
    });
});

this.router.navigate(['/ordernow']);
 
}
}
