import { Component, OnInit } from '@angular/core';
import { SharedService } from '../login/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService:SharedService,
    private router:Router) { }
  isHidden:boolean;
  userObj:any ={};
  CurrentUser:any ={};
  ngOnInit(): void {
    this.sharedService.currentData.subscribe(data => {
      this.CurrentUser =data;
      if(data== ''){
        this.isHidden = true;
        this.userObj = null;
      }
      else{
        this.isHidden =false;
        this.userObj =data;
      }
    })
  }
 
Profile(){
if(this.CurrentUser.role == "vendor"){
  this.router.navigate(['/modal']);
}
else if(this.CurrentUser.role == "Customer"){
  this.router.navigate(['/view']);
}
}
}
