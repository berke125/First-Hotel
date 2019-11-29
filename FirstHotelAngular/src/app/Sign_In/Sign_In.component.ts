import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../shared/customer.service';
@Component({
  selector: 'Sign_In-root',
  templateUrl: './Sign_In.component.html'
})
export class Sign_InComponent {
  public email: string = '';
  public password: string = '';
  constructor(private service: CustomerService) {}
  login()
  {
    var login = this.service.Login(this.email, this.password).subscribe((c: any) => {
    if (c.Id > 0)
      alert('Başarıyla giriş yaptınız.');
    else
      alert('Giriş başarısız.');
    })
    
    

    
  }
}
