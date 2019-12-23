import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './shared/customer.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'Welcome to Odeon,'
  title2:any  = {
    'Id': 0,
    'NameSurname': '',
    'EMail': '',
    'Password': ''
  };
 
  opened: boolean = false;
  constructor(public customerService: CustomerService) { }
  ngOnInit()
  {
    if ((isNullOrUndefined(localStorage.getItem('User'))) == true)
      this.title2 = {
        'Id': 0,
        'NameSurname': '',
        'EMail': '',
        'Password': ''
      };
    else
      this.title2=JSON.parse(localStorage.getItem('User'));
   
  }
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
    location.reload();
  }
}
