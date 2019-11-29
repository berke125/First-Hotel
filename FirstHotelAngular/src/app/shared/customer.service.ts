import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private login:number = 0;
  formData: Customer;
  public rootURL = 'http://localhost:49725/api';
  constructor(private _http: HttpClient) { }
  Login(email, password)
  {

    return this._http.get(this.rootURL + '/Customer?email=' + email + '&password=' + password);
}
  PostCustomer(formData: Customer) {
    return this._http.post(this.rootURL + '/Customer', formData);
  }
}
