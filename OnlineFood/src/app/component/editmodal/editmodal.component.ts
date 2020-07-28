import { Component, OnInit } from '@angular/core';
import { SharedService } from '../login/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../modal/modal.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.scss']
})
export class EditmodalComponent implements OnInit {
addForm:FormGroup
  profileDetail: any;
  getdetail = [];
  currentemployee = [];
  constructor(private sharedService:SharedService,
    private fb:FormBuilder,
    private modalService:ModalService,
   private snackBar:MatSnackBar,
   private router:Router) { }
CurrentUser:any ={};
  ngOnInit(): void {
    this.createForm();
    this.getCurrentUser();
  }
  
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
      isActive:['',Validators.required]
      
    })
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data => {
      this.profileDetail = data;
      console.log(this.profileDetail._id);
      this.modalService.getHotel().subscribe(data =>{
      this.getdetail=data;
    
      for(let i = 0 ; i<this.getdetail.length;i++ ){
        if(this.getdetail[i].restroId== this.profileDetail._id){
          this.currentemployee[0]=this.getdetail[i];
        }
      }
      console.log(this.currentemployee);
      })
    
  })
}

Save(){
  this.addForm.value._id= this.currentemployee[0]._id;
//  this.addForm.value.isActive="true";
  this.modalService.updateHotel(this.addForm.value).subscribe(data=>{
    this.snackBar.open('Updated', 'Successfully', {
      duration: 2000,
    });
    console.log(data);
  },
 err=>console.log(err)) ; 
console.log(this.addForm.value);
this.router.navigate(['/vendordash/viewitem']);
}
}
