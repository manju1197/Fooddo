import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../viewprofile/profile.service';
import { Profile } from '../viewprofile/profile';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
userlist:Profile[];
  constructor(private profileService:ProfileService) { }
  displayedColumns: string[] = ['firstname','dob','address','city','gender','contact','email'];
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
  
}
}
