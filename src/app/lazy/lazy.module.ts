import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [CustomerComponent, OrderComponent],
  imports: [
    CommonModule, LazyRoutingModule
  ]
})
export class LazyModule { }
