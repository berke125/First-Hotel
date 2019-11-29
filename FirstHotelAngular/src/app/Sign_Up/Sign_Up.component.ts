import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CustomerService } from '../shared/customer.service';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../shared/customer.model';

@Component({
  selector: 'Sign_Up-root',
  templateUrl: './Sign_Up.component.html'
})
export class Sign_UpComponent implements OnInit {
  
  constructor(private service: CustomerService,
    private toastr: ToastrService) { }
 
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData =
      {
      Id: null,
      NameSurname: '',
      EMail: '',
      Password:''
      }
  }
  onSubmit(form: NgForm)
  {
    this.insertRecord(form);
  }
  insertRecord(form: NgForm)
  {
    this.service.PostCustomer(form.value).subscribe(res => {
      this.toastr.success('Inserted successfullly', 'Registered');
      this.resetForm(form);
    });
  }
}
