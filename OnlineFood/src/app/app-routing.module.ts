import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { CustomerComponent } from './component/customer/customer.component';
import { VendorComponent } from './component/vendor/vendor.component';
import { AdminComponent } from './component/admin/admin.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { OrderlistComponent } from './component/orderlist/orderlist.component';
import { ModalComponent } from './component/modal/modal.component';
// import { ProductorderComponent } from './component/productorder/productorder.component';
import { ViewprofileComponent } from './component/viewprofile/viewprofile.component';
import { PlaceorderComponent } from './component/placeorder/placeorder.component';
import { ClientComponent } from './component/client/client.component';
import { OrderComponent } from './component/order/order.component';
import { ViewitemComponent } from './component/viewitem/viewitem.component';
import { EditviewprofileComponent } from './component/editviewprofile/editviewprofile.component';
import { EditmodalComponent } from './component/editmodal/editmodal.component';
import { AdmincardsComponent } from './component/admincards/admincards.component';
import { VendorlistComponent } from './component/vendorlist/vendorlist.component';
import { CustomerlistComponent } from './component/customerlist/customerlist.component';
import { VendordashboardComponent } from './component/vendordashboard/vendordashboard.component';
import { UserComponent } from './component/user/user.component';
import { MyorderComponent } from './component/myorder/myorder.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'customer',component:CustomerComponent},
  {path:'vendordash',component:VendordashboardComponent,
children:[
  {path:'vendor',component:VendorComponent},
  {path:'viewitem',component:ViewitemComponent}
]},
  {path:'admin',component:AdminComponent,
children:[
  {path: '', redirectTo: 'admincard',pathMatch:'full'},
  {path:'admincard',component:AdmincardsComponent},
  {path:'vendorlist',component:VendorlistComponent},
  {path:'user',component:UserComponent},
  {path:'customerlist',component:CustomerlistComponent},
{path:'orderlist',component:OrderlistComponent}
]},
  {path:'additem',component:AddItemComponent},
  // {path:'order',component:OrderlistComponent},
  {path:'modal',component:ModalComponent},
  {path:'client',component:ClientComponent},
  {path:'view',component:ViewprofileComponent},
  {path:'porder',component:PlaceorderComponent},
  {path:'porder/:id',component:PlaceorderComponent},
  {path:'ordernow',component:OrderComponent},
  {path:'ordernow/:id',component:OrderComponent},
  
  {path:'vendormodal',component:EditmodalComponent},
  {path:'customerprofile',component:EditviewprofileComponent},
  {path:'myorder',component:MyorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
