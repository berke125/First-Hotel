import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'CustomerList-root',
  templateUrl: './CustomerList.component.html'
})
export class CustomerListComponent implements OnInit {
  customers: any;
  constructor(private service: CustomerService, http: HttpClient) { }
    deleteCustomer()
    {
    
    }
  ngOnInit() {
    let resp = this.service.GetCustomer();
    resp.subscribe((data) => this.customers = data);

    
  }
}
