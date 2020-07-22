import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from '../login/shared.service';
import { Profile } from './profile';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {
  profileForm:FormGroup;
  constructor(private fb:FormBuilder,
    private profileService:ProfileService,
    private _snackBar: MatSnackBar,
    private router :Router,
    private sharedService:SharedService) { }
CurrentUser:any ={};
ProfileObj:Profile =new Profile();
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
Save(){
  this.ProfileObj.firstname= this.profileForm.value.firstname;
  this.ProfileObj.lastname = this.profileForm.value.lastname;
  this.ProfileObj.userId = this.CurrentUser._id;
  this.ProfileObj.dob = this.profileForm.value.dob;
  this.ProfileObj.Address = this.profileForm.value.address;
  this.ProfileObj.City = this.profileForm.value.city;
  this.ProfileObj.State = this.profileForm.value.state;
  this.ProfileObj.Gender = this.profileForm.value.gender;
  this.ProfileObj.Pin = this.profileForm.value.pin;
  this.ProfileObj.contact = this.profileForm.value.contact;
  this.ProfileObj.email = this.profileForm.value.email;


  this.profileService.createUser( this.ProfileObj).subscribe(data=>{
    this._snackBar.open('sign up Successful', 'Customer  Added', {
      duration: 2000,
    });
}),
this.router.navigate(['/login']);
}
}
