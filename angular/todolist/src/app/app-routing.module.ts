import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AdminComponent } from './component/admin/admin.component';
import { ProductsComponent } from './component/products/products.component';
import { OrdersComponent } from './component/orders/orders.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'admin',component:AdminComponent},
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
