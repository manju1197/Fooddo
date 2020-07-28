import { Component, OnInit } from '@angular/core';
import { OrderService } from '../placeorder/order.service';
import { Order_P } from '../placeorder/order';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {
orderlist:Order_P[];
  constructor(private orderService:OrderService) { }
  displayedColumns: string[] = ['name','Productname','OrderId','Total','created_dt'];
  dataSource = [];
  ngOnInit(): void {
  this.getOrder();
  }
getOrder(){
  this.orderService.getPorder().subscribe(data =>{
   this.orderlist = data;
   this.dataSource = this.orderlist;
   console.log(this.orderlist);
  })
}
}
