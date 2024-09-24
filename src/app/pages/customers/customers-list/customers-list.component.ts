import { Component, OnInit } from '@angular/core';
//import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { CUSTOMERS } from '../customer-data';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[] = [];

   // Breadcrumb öğeleri
   breadCrumbItems: Array<{}>;

   constructor() {}
 
   ngOnInit(): void {
     this.breadCrumbItems = [
       { label: "Nazox" },
       { label: "Customers List", active: true },
     ];
     this._fetchData();
   }
 
   private _fetchData() {
     this.customers = CUSTOMERS;
   }
  }

