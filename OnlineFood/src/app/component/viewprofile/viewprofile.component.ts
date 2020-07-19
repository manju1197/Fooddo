import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    private router :Router) { }

  ngOnInit(): void {
    this.createForm();
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
Save(){
  this.profileService.createUser( this.profileForm.value).subscribe(data=>{
    this._snackBar.open('sign up Successful', 'Client  Added', {
      duration: 2000,
    });
}),
this.router.navigate(['/login']);
}
}
