import { Component, OnInit,Inject,Output, EventEmitter  } from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {FormBuilder, FormGroup, ControlValueAccessor, NgControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdditemService} from './additem.service';
import { Additem } from './additem';
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




  constructor(public dialogRef: MatDialogRef<AddItemComponent>,
    private fb:FormBuilder,
    private addService:AdditemService
    ) {
      
     }

  ngOnInit(): void {
    this.createForm();
  }
  category: Category[] = [
    {value: 'Snacks', viewValue: 'Snacks'},
    {value: 'Main Course', viewValue: 'Main Course'},
    {value: 'Drinks', viewValue: 'Drinks'},
    {value: 'Desert', viewValue: 'Desert'}
  ];
  onNoClick(): void {
    this.dialogRef.close();
  }
  createForm(){
    this.addForm = this.fb.group({
      Categoryname:['',Validators.required],
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

 }

 