import { Component, OnInit } from '@angular/core';
import { AdditemService } from '../additem.service';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { SharedService } from '../../login/shared.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
Form:FormGroup
  constructor(private addService:AdditemService,
    private fb :FormBuilder,
    private sharedService:SharedService) { }
List:any=[];
CurrentUser:any={};
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.Form = this.fb.group({
   
      name:['',Validators.required],
      // createdBy:['',Validators.required]
      
    })
  }
Add(){
  this.addService.createCategory(this.Form.value).subscribe(data => {
    this.List = data;
   console.log(this.List);
   alert('category added successfully');
   
 }),
 this.addService.getCategory().subscribe(data => {
this.sharedService.updatecategory(data);
}),
 err=>console.log(err);
}
getCurrentUser(){
  this.sharedService.currentData.subscribe(data => {
    this.CurrentUser =data}
  )
}
}
