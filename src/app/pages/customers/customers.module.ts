import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
