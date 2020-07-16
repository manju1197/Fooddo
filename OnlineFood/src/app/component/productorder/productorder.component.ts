import { Component, OnInit } from '@angular/core';
import { AdditemService } from '../add-item/additem.service';

@Component({
  selector: 'app-productorder',
  templateUrl: './productorder.component.html',
  styleUrls: ['./productorder.component.scss']
})
export class ProductorderComponent implements OnInit {

  constructor(private addService:AdditemService) { }
arrayList:any=[];
  ngOnInit(): void {
    this.addService.getItem().subscribe(data =>{
      this.arrayList = data;
      console.log(this.arrayList);

  })


}
}
