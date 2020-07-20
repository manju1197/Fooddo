import { Component, OnInit } from '@angular/core';
import { AdditemService } from '../add-item/additem.service';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.scss']
})
export class ViewitemComponent implements OnInit {

  constructor(private addService:AdditemService) { }
arrayList :any ={};
  ngOnInit(): void {
    this.addService.getItem().subscribe(data =>{
       this.arrayList =data; 
      console.log(data);
  })

}
}
