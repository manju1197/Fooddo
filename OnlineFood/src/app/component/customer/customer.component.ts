import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../modal/modal.service';
import { Modal } from '../modal/modal';
import { SharedService } from '../login/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private http:HttpClient,
    private modalService:ModalService,
    private sharedService:SharedService,
    private router:Router) { }
cafeList:any =[];
  ngOnInit(): void {
    this.modalService.getHotel().subscribe(data =>{
      this.cafeList =data;
      this.sharedService.updateHotel(data);
      console.log(this.cafeList);
     
    })
  }
  view(item){
    this.router.navigate(['/client',item]);
 
   }
}
