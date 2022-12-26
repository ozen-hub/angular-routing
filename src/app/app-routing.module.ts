import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './components/customer/customer.component';
import {ItemComponent} from './components/item/item.component';
import {OrderComponent} from './components/order/order.component';
import {PlaceOrderComponent} from './components/place-order/place-order.component';
import {NotFoudPageComponent} from "./components/not-foud-page/not-foud-page.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {NavigateGuard} from "./guards/navigate.guard";
import {FinanceComponent} from "./components/dashboard/sub-components/finance/finance.component";
import {HrComponent} from "./components/dashboard/sub-components/hr/hr.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [NavigateGuard], children: [
      {path: '', redirectTo: '/dashboard/finance', pathMatch: 'full'},
      {path:'finance', component:FinanceComponent},
      {path:'hr', component:HrComponent}
    ]
  },
  /* /!* {path:'',redirectTo:'/customer', pathMatch:'full'},*!/
    {path:'customer/:name',component:CustomerComponent},
    {path:'item/:data',component:ItemComponent},
    {path:'order',component:OrderComponent},
    {path:'place-order',component:PlaceOrderComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'**',component:NotFoudPageComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
