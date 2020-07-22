import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdditemService } from '../add-item/additem.service';
import { SharedService } from '../login/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private addService:AdditemService,
    private sharedService:SharedService,
    private router:Router) { }
    arrayList:any =[];
    CurrentProduct:any={};
    userDetails:any =[];
  ngOnInit(){
    this.addService.getItem().subscribe(data =>{
      this.arrayList = data;
      console.log(this.arrayList);
      
  this.sharedService.updateProduct(data);
 }
    )
// this.sharedService.currentData.subscribe(data =>{
//   this.userDetails = data;
//   if(this.userDetails != null){
//     this.getMyItem(this.userDetails._id);
//   }
//   })
     
  }
  getProduct(){
    this.sharedService.Pdata.subscribe(data =>{
      this.CurrentProduct = data;
    })
  }
  POrder(item){
    this.router.navigate(['/porder',item]);
 
   }
  //  getMyItem(id){
  //   this.addService.getMyItem(id).subscribe(data => {
  //     console.log(data);
  //     this.arrayList = data;
  //     this.sharedService.updateProduct(data);
  //   })
  // }
}
