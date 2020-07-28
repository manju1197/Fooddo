import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { Modal } from '../modal/modal';
import { SharedService } from '../login/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

  constructor(private modalService:ModalService,
    private sharedService:SharedService,
    private router:Router) { }
hotelList:Modal[];
displayedColumns: string[] = ['actions','name','address','city','contact','type','status'];
dataSource = [];
  ngOnInit(): void {
    this.getVendor();
  }
getVendor(){
  this.modalService.getHotel().subscribe(data => {
    this.hotelList= data;
    this.dataSource = this.hotelList;
    console.log(this.hotelList);
  })
}
update(item){
  console.log(item);
  this.sharedService.updateMessage(item._id);
  this.router.navigate(['admin/hotel']);
}
}
