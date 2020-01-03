import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomerService } from '../shared/customer.service';
@Component({
  selector: 'Forgotten_Password-root',
  templateUrl: './Forgotten_Password.component.html'
})

export class ForgottenPasswordComponent implements OnInit
{
  public email: string = '';
  constructor(private router: Router, private formBuilder: FormBuilder, private service: CustomerService) { }
  search()
  {
    
  }
  ngOnInit()
  {
   
  }
}
