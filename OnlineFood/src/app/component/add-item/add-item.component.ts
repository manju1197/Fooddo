import { Component, OnInit,Inject,Output, EventEmitter  } from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {FormBuilder, FormGroup, ControlValueAccessor, NgControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdditemService} from './additem.service';
import { Additem } from './additem';
import { CategoryComponent } from './category/category.component';
import {Category} from './category';
import { SharedService } from '../login/shared.service';


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
Add
List:any[];
CurrentUser:any ={};
UserCurrent:any={};
categoryObj:Additem= new Additem();
  constructor(public dialogRef: MatDialogRef<AddItemComponent>,
    private fb:FormBuilder,
    private addService:AdditemService,
    public dialog:MatDialog,
    private sharedService:SharedService,
    
    ) {
      
     }

  ngOnInit(): void {
    
  
    this.createForm();
   this.getType();
  //  this.getCurrentCategory();
  this.getCurrentUser();
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  createForm(){
    this.addForm = this.fb.group({
     Categoryname:['',Validators.required],
     restroId:['',Validators.required],
      name:['',Validators.required],
      price:['',Validators.required],
      image:['',Validators.required],
      rating:['',Validators.required],
      
    })
  }
  getType(){
    this.addService.getCategory().subscribe(data => {
      this.List = data;
     console.log(this.List);
    //  this.sharedService.updatecategory(data);
   })
  }
  getCurrentCategory(){
    this.sharedService.typeData.subscribe(data => {
      this.CurrentUser =data}
    );
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data => {
      this.UserCurrent =data}
    );
  }
 Save(){
  
  this.categoryObj.Categoryname =this.addForm.value.Categoryname.name;
  this.categoryObj.restroId = this.UserCurrent._id;
  this.categoryObj.name = this.addForm.value.name;
  this.categoryObj.price= this.addForm.value.price;
  this.categoryObj.image= this.addForm.value.image;
  this.categoryObj.rating = this.addForm.value.rating;

  this.addService.createItem(this.categoryObj).subscribe(data => {
     this.addList = data;
    console.log(this.addList);
    alert('menu added successfully');
  }),
  this.addService.getItem().subscribe(data =>{
this.sharedService.updateProduct(data);
    console.log(data);
})
}
 openDialog() {
  const dialogRef = this.dialog.open(CategoryComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

 }

 