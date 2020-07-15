import { Component, OnInit,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';
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
  @Input() posts = [];
  
  constructor(public dialog: MatDialog) { }
 Itemname :string;
 image:string;
 price:number;
 selectedValue:string;
  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '1050px',
      data: {Itemname: this.Itemname, image: this.image,price:this.price,selectedValue:this.selectedValue}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
