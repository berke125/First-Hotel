import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened: boolean = false;
  go() {
    if (this.opened)
      this.opened = false;
    else
      this.opened = true;
  }
}
