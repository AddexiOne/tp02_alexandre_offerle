import { Component } from '@angular/core';
import { timeout, timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = 'sheesh';
  valid : boolean = true;
  isValid() : boolean {
    return this.valid;
  }
  submit() : void {
    this.valid = !this.valid;
    timer(2000).subscribe(() => this.valid = !this.valid);
  }


}
