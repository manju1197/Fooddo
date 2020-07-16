import { Component, OnInit,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';
import { AdditemService} from '../add-item/additem.service';
export interface DialogData {
  Itemname :string;
 image:string;
 price:number;
 selectedValue: string;
}
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
 
  
  constructor(public dialog: MatDialog,
    private addService:AdditemService) { }
 Itemname :string;
 image:string;
 price:number;
 selectedValue:string;
 arrayList:any =[];
//  arrayList: Item[];
  ngOnInit(): void {
    this.addService.getItem().subscribe(data =>{
      this.arrayList = data;
      console.log(this.arrayList);
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '1050px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
