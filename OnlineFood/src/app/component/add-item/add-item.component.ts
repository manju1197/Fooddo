import { Component, OnInit,Inject,Output, EventEmitter  } from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {FormBuilder, FormGroup, ControlValueAccessor, NgControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdditemService} from './additem.service';
import { Additem } from './additem';
import { CategoryComponent } from './category/category.component';
interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
Categoryname: string;
  hide = true;
  addList:any=[];
addForm:FormGroup;

List:any[];


  constructor(public dialogRef: MatDialogRef<AddItemComponent>,
    private fb:FormBuilder,
    private addService:AdditemService,
    public dialog:MatDialog
    ) {
      
     }

  ngOnInit(): void {
    this.createForm();
    this.addService.getCategory().subscribe(data => {
      this.List = data;
     console.log(this.List);
    
   })
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }
  createForm(){
    this.addForm = this.fb.group({
      CategoryId:['',Validators.required],
      name:['',Validators.required],
      price:['',Validators.required],
      image:['',Validators.required],
      rating:['',Validators.required],
      
    })
  }
 Save(){
  this.addService.createItem(this.addForm.value).subscribe(data => {
     this.addList = data;
    console.log(this.addList);
    alert('menu added successfully');
  },
  err=>console.log(err));
 }
 openDialog() {
  const dialogRef = this.dialog.open(CategoryComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

 }

 