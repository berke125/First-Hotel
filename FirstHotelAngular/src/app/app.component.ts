import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './shared/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Odeon,'
  title2 = JSON.parse(localStorage.getItem('User'));
  opened: boolean = false;
  constructor(public customerService: CustomerService) {}
  go() {
    if (this.opened)
      this.opened = false;
    else
      this.opened = true;
  }
  logout()
  {
    this.customerService.Logout()
    this.title2.NameSurname = {};
  }
}
