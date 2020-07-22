import { Component, OnInit } from '@angular/core';
import { AdditemService } from '../add-item/additem.service';
import { SharedService } from '../login/shared.service';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.scss']
})
export class ViewitemComponent implements OnInit {

  constructor(private addService:AdditemService,
    private sharedService :SharedService) { }
arrayList :any ={};
userDetails:any=[];
  ngOnInit(){
this.sharedService.currentData.subscribe(data =>{
this.userDetails = data;
if(this.userDetails != null){
  this.getMyItem(this.userDetails._id);
}
})
   

}
getMyItem(id){
  this.addService.getMyItem(id).subscribe(data => {
    console.log(data);
    this.arrayList = data;
  })
}
}
