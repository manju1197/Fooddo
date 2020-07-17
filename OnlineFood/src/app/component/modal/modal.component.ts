import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from './modal.service';
import { SharedService } from '../login/shared.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
addForm:FormGroup;
  constructor(private fb:FormBuilder,
    private modalService:ModalService,
    private sharedService:SharedService) { }
hotelList:any =[];
CurrentUser:any ={};
  ngOnInit(): void {
    
    this.getCurrentUser();
  }
  createForm(){
    this.addForm = this.fb.group({
      restaurant:['',Validators.required],
      regId:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
       pin:['',Validators.required],
    type:['',Validators.required],
      otime:['',Validators.required],
      ctime:['',Validators.required],
      status:['',Validators.required]
    })
  }
  Save(){
    this.modalService.createHotel(this.addForm.value).subscribe(data =>{
      this.hotelList =data;
      console.log(this.hotelList);
      alert('Hotel added Successfully');
    })
  //   Close():void{
  //     this.createForm.close();
  //   }
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data => {
      this.CurrentUser =data}
    )
  };

}
