import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../login/shared.service';
import { AdditemService } from '../add-item/additem.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.scss']
})
export class EditmenuComponent implements OnInit {
addForm:FormGroup
profileDetail: any;
ProductId:any ={};
productdetails:any={};
getdetail :any= [];
currentemployee = [];
  constructor(private sharedService:SharedService,
    private fb:FormBuilder,
    private addService:AdditemService,
    private snackBar:MatSnackBar,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(){
    if(this.route.snapshot.paramMap.get('id')){
      this.ProductId = this.route.snapshot.paramMap.get('id');
    }
    if(this.ProductId != null){
      this.addService.getOneItem(this.ProductId).subscribe(data =>{
        this.productdetails = data;
        console.log(this.productdetails);
        this.sharedService.updateProduct(data);
        this.addService.getItem().subscribe(data =>{
        this.getdetail = data
        for(let i = 0 ; i<this.getdetail.length; i++ ){
          if(this.getdetail[i]._id== this.productdetails._id){
            this.currentemployee[0]=this.getdetail[i];
          }
        }
        console.log(this.currentemployee);
      }),
      err =>{console.log(err);
      }
      })
    }
    this.createForm();
// this.getCurrentProduct();
  }
  createForm(){
    this.addForm = this.fb.group({
     Categoryname:['',Validators.required],
    
      name:['',Validators.required],
      price:['',Validators.required],
      image:['',Validators.required],
      rating:['',Validators.required],
      isActive:['']
      
    })
  }
//   getCurrentProduct(){
//     this.sharedService.Pdata.subscribe(data => {
//       this.profileDetail = data;
//       console.log(this.profileDetail);
//       this.addService.getItem().subscribe(data =>{
//       this.getdetail= data;
//       for(let i = 0 ; i<this.getdetail.length; i++ ){
//         if(this.getdetail[i]._id== this.profileDetail){
//           this.currentemployee[0]=this.getdetail[i];
//         }
//       }
//       console.log(this.currentemployee);
//     })
//   })
// }
Save(){
  this.addForm.value._id= this.currentemployee[0]._id;
  //  this.profileForm.value.isActive = "true";
    this.addService.updateItem(this.addForm.value).subscribe(data=>{
      this.snackBar.open('Updated', 'Successfully', {
        duration: 2000,
      });
      console.log(data);
    },
   err=>console.log(err)) ; 
  console.log(this.addForm.value);
  this.router.navigate(['/vendordash/viewitem']);
  }
}

