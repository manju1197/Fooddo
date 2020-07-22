import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../viewprofile/profile.service';
import { ModalService } from '../modal/modal.service';
import { UserService } from '../user/user.service';
import { OrderService } from '../placeorder/order.service';

@Component({
  selector: 'app-admincards',
  templateUrl: './admincards.component.html',
  styleUrls: ['./admincards.component.scss']
})
export class AdmincardsComponent implements OnInit {
customerCount:any=[];
userCount:any=[];
orderCount:any=[];
HotelCount:any=[];
  constructor(private profileService:ProfileService,
    private modalservice:ModalService,
    private userService:UserService,
    private orderService:OrderService) { }

  ngOnInit(): void {
    this.getCustomer();
    this.getHotels();
    this.getUsers();
    this.getOrders();
  }
getCustomer(){
this.profileService.getUser().subscribe(data =>{
this.customerCount=data.length;
console.log(this.customerCount);
},
err=> console.log(err));
}
getHotels(){
this.modalservice.getHotel().subscribe(data =>{
  this.HotelCount =data.length;
  console.log(this.HotelCount);
},
err=> console.log(err));
}
getUsers(){
this.userService.getUsers().subscribe(data =>{
  this.userCount = data.length;
  console.log(this.userCount);
},
err=> console.log(err));
}
getOrders(){
this.orderService.getOrder().subscribe(data =>{
  this.orderCount =data.length;
  console.log(this.orderCount);
},
err=> console.log(err));
}
}
