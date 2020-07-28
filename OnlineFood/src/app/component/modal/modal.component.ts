import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from './modal.service';
import { SharedService } from '../login/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Modal } from './modal';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
addForm:FormGroup;
  constructor(private fb:FormBuilder,
    private modalService:ModalService,
    private sharedService:SharedService,
    private router :Router,
    private snackBar:MatSnackBar) { }
hotelList:any =[];
CurrentUser:any ={};
HotelObj:Modal =  new Modal();
  ngOnInit(): void {
    this.createForm();
    this.getCurrentUser();
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data => {
      this.CurrentUser =data}
    )
  };
  createForm(){
    this.addForm = this.fb.group({
      restaurant:['',Validators.required],
    
      url:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
       pin:['',Validators.required],
       contact:['',Validators.required],
    type:['',Validators.required],
      opentime:['',Validators.required],
      closetime:['',Validators.required],
      status:['',Validators.required],
      isActive:['']
    })
  }
  Save(){
    this.HotelObj.name= this.addForm.value.restaurant;
    this.HotelObj.restroId = this.CurrentUser._id;
    this.HotelObj.url = this.addForm.value.url;
    this.HotelObj.address= this.addForm.value.address;
    this.HotelObj.city= this.addForm.value.city;
    this.HotelObj.state= this.addForm.value.state;
    this.HotelObj.pin= this.addForm.value.pin;
    this.HotelObj.contact= this.addForm.value.contact;
    this.HotelObj.type= this.addForm.value.type;
    this.HotelObj.opentime= this.addForm.value.opentime;
    this.HotelObj.closetime= this.addForm.value.closetime;
    this.HotelObj.status= this.addForm.value.status;
    this.HotelObj.isActive= "True";
    this.modalService.createHotel(this.HotelObj).subscribe(data =>{
      this.hotelList =data;
      this.sharedService.updateHotel(data);
      console.log(this.hotelList);
      console.log('Hotel added Successfully');
    }),
    
    this.snackBar.open('Sign Up Sucessfully', 'Restaurant Added', {
      duration: 1000,
    });
    this.router.navigate(['/login']);
  }


}
