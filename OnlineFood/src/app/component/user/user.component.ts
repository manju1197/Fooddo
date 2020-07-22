import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../login/login';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userList:User[];
  constructor(private userService:UserService) { }
  displayedColumns: string[] = ['name','email','contact','role'];
  dataSource = [];
  ngOnInit(): void {
    this.getUser();
  }
getUser(){
  this.userService.getUsers().subscribe(data =>{
this.userList =data;
this.dataSource = this.userList;
  })
}
}
