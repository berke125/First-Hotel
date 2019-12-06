import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'Sign_In-root',
  templateUrl: './Sign_In.component.html'
})
export class Sign_InComponent {
  public email: string = '';
  public password: string = '';
  constructor(private service: CustomerService, private router: Router) { }
  isLoggedin = false;
  login() {
    var login = this.service.Login(this.email, this.password).subscribe((customer: any) => {
      if (customer.Id > 0) {
        localStorage.setItem(JSON.stringify(customer),"User");
        this.isLoggedin = true;
        alert('Başarıyla giriş yaptınız.' + customer.NameSurname);
        
      }
      else {
        this.isLoggedin = false;
        alert('Giriş başarısız.');
      }


    })




  }
}
