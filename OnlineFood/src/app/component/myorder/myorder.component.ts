import { Component, OnInit } from '@angular/core';
import { SharedService } from '../login/shared.service';
import { OrderService } from '../placeorder/order.service';
import { Order_P } from '../placeorder/order';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {
  order:Order_P[];
  orderDetails:any=[];
  constructor(private sharedService:SharedService,
    private orderService:OrderService) { }
    displayedColumns: string[] = ['Productname','OrderId','Total','created_dt'];
    dataSource =[];

  ngOnInit() {
    this.sharedService.currentData.subscribe(data =>{
      this.orderDetails = data;
      if(this.orderDetails != null){
        this.getMyTransaction(this.orderDetails._id);
      }
    })
  }
  getMyTransaction(id){
    this.orderService.getMyTransaction(id).subscribe(data => {
      console.log(data);
      this.dataSource = data.docs;
    
    },
    err => console.log(err));
  }
}
