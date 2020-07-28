import { Component, OnInit } from '@angular/core';
import { SharedService } from '../login/shared.service';
import { OrderService } from '../placeorder/order.service';

@Component({
  selector: 'app-hotelorder',
  templateUrl: './hotelorder.component.html',
  styleUrls: ['./hotelorder.component.scss']
})
export class HotelorderComponent implements OnInit {
  orderDetails:any=[];
  constructor(private sharedService:SharedService,
    private orderService:OrderService) { }
    displayedColumns: string[] = ['UserId','Productname','OrderId','Total','created_dt'];
    dataSource =[];
  ngOnInit(): void {
    this.sharedService.currentData.subscribe(data =>{
      this.orderDetails = data;
      if(this.orderDetails != null){
        this.getMyOrder(this.orderDetails._id);
      }
    })
  }
  getMyOrder(id){
    this.orderService.getMyOrder(id).subscribe(data => {
      console.log(data);
      this.dataSource = data.docs;
    
    },
    err => console.log(err));
  }

}
