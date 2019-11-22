import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'Sign_In-root',
  templateUrl: './Sign_In.component.html'
})
export class Sign_InComponent {
  login()
  {
    alert("Hello");
  }
}
