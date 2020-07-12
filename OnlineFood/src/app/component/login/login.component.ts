import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import {User} from './login'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm:FormGroup;
  loginForm:FormGroup;

 

user = new User();
  constructor(private fb:FormBuilder ,
    private _snackBar: MatSnackBar,
    private  loginService:LoginService,
    private router :Router,
    private route:ActivatedRoute) { 
     
    }

  ngOnInit(): void {
    this.createSignupForm();
     this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required]
    })
  }
  login(){
    this.loginService.loginUser( this.loginForm.value).subscribe(data=>{
      this._snackBar.open('login Successful', 'Success', {
        duration: 2000,
      });

      // this.router.navigate(['user']);
      // console.log(data);
      if(this.loginForm.value.role == "customer"){
        this.router.navigate(['/customer'],{relativeTo:this.route});
      }
  else if(this.loginForm.value.role== "vendor"){
    this.router.navigate(['/vendor'],{relativeTo:this.route});
  }
  else{
    this.router.navigate(['/admin'],{relativeTo:this.route});
  }
    },
   err=>console.log(err)) ; 
   }
  createSignupForm(){
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      // confirmPassword:['',Validators.required],
      contact:['',Validators.required],
      role:['',Validators.required]
    })
  }
  signup(){
    this.signupForm.value.role ="user";
    this.loginService.createUser( this.signupForm.value).subscribe(data=>{
      alert("SignUp Successful");
      console.log(data);
  
    },
   err=>console.log(err)) ;
  }
  Role: string;
  roles: string[] = ['Admin','Restaurant Owner','Customer'];
   }
