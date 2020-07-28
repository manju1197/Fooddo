import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdditemService } from '../add-item/additem.service';
import { SharedService } from '../login/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private addService:AdditemService,
    private sharedService:SharedService,
    private router:Router,
    private route:ActivatedRoute) { }
    arrayList:any =[];
    CurrentProduct:any={};
    userDetails:any =[];
    restroId:any={};
  ngOnInit(){
//     this.addService.getItem().subscribe(data =>{
//       this.arrayList = data;
//       console.log(this.arrayList);
      
//   this.sharedService.updateProduct(data);
//  }
//     )
// -------------------------------get item list--------------------------------------------------
if(this.route.snapshot.paramMap.get('id')){
  this.restroId = this.route.snapshot.paramMap.get('id');
}
if(this.restroId != null){
  this.addService.getMyItem(this.restroId).subscribe(data =>{
    this.arrayList = data;
    console.log(this.arrayList);
    this.sharedService.updateProduct(data);
  },
  err =>{console.log(err);
 })

}

     
  }

  getProduct(){
    this.sharedService.Pdata.subscribe(data =>{
      this.CurrentProduct = data;
    })
  }
  POrder(item){
    this.router.navigate(['/porder',item]);
 
   }
     
 }
