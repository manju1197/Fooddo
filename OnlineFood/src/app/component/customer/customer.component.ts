import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../modal/modal.service';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private http:HttpClient,
    private modalService:ModalService) { }
cafeList:any =[];
  ngOnInit(): void {
    this.modalService.getHotel().subscribe(data =>{
      this.cafeList =data;
      console.log(this.cafeList);
    })
  }

}
