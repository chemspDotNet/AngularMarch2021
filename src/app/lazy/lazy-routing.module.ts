import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

const lazyRoutes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'order', component: OrderComponent }

]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(lazyRoutes)
  ],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
