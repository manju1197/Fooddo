import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../viewprofile/profile.service';
import { Profile } from '../viewprofile/profile';
import { SharedService } from '../login/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
userlist:Profile[];
  constructor(private profileService:ProfileService,private sharedService:SharedService
    ,private router:Router) { }
  displayedColumns: string[] = ['actions','firstname','dob','address','city','gender','contact','email'];
  dataSource = [];
  ngOnInit(): void {
    this.getUser();
  }
getUser(){
  this.profileService.getUser().subscribe(data =>{
this.userlist = data;
this.dataSource = this.userlist;
console.log(this.userlist);
  })
}
update(item){
  console.log(item);
  this.sharedService.updateMessage(item._id);
  this.router.navigate(['/admin/customer']);
}
}
