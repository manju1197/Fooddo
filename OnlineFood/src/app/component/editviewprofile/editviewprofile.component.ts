import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from '../viewprofile/profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from '../login/shared.service';

@Component({
  selector: 'app-editviewprofile',
  templateUrl: './editviewprofile.component.html',
  styleUrls: ['./editviewprofile.component.scss']
})
export class EditviewprofileComponent implements OnInit {
  profileDetail: any;
  profileForm:FormGroup;
  getdetail = [];
  currentemployee = [];
  constructor(private fb:FormBuilder,
    private profileService:ProfileService,
    private _snackBar: MatSnackBar,
    private sharedService:SharedService
   ) { }

  ngOnInit(): void {
    this.createForm();
    this.getCurrentUser();
  }
  createForm(){
    this.profileForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      dob:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pin:['',Validators.required],
      gender:['',Validators.required],
      contact:['',Validators.required],
      email:['',Validators.required],
    })
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data => {
      this.profileDetail = data;
      console.log(this.profileDetail._id);
      this.profileService.getUser().subscribe(data =>{
      this.getdetail=data;
      for(let i = 0 ; i<this.getdetail.length;i++ ){
        if(this.getdetail[i].userId== this.profileDetail._id){
          this.currentemployee[0]=this.getdetail[i];
        }
      }
      console.log(this.currentemployee);
      })
    
  })
}
Save(){
  this.profileForm.value._id= this.currentemployee[0]._id;
 
  this.profileService.updateUser(this.profileForm.value).subscribe(data=>{
    this._snackBar.open('Updated', 'Successfully', {
      duration: 2000,
    });
    console.log(data);
  },
 err=>console.log(err)) ; 
console.log(this.profileForm.value);
}
}
