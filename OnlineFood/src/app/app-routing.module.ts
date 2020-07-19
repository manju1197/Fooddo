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


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'customer',component:CustomerComponent},
  {path:'vendor',component:VendorComponent},
  {path:'admin',component:AdminComponent},
  {path:'additem',component:AddItemComponent},
  {path:'order',component:OrderlistComponent},
  {path:'modal',component:ModalComponent},
  {path:'client',component:ClientComponent},
  {path:'view',component:ViewprofileComponent},
  {path:'porder',component:PlaceorderComponent},
  {path:'porder/:id',component:PlaceorderComponent},
  {path:'ordernow',component:OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
