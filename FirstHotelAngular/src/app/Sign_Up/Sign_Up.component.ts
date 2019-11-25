import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../shared/customer.service';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'Sign_Up-root',
  templateUrl: './Sign_Up.component.html'
})
export class Sign_UpComponent implements OnInit {
  constructor(private service: CustomerService, private toastr: ToastrService) { }
  register()
  {
    
  }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      Id: null,
      NameSurname: '',
      EMail: '',
      Password:''
    }
  }
  onSubmit(form: NgForm) { this.insertRecord(form); }

  insertRecord(form: NgForm) {
    this.service.PostCustomer(form.value).subscribe(res => {
      this.toastr.success('Inserted Successfully', 'Customer. Register');
      this.resetForm(form);
    })
  }
}
