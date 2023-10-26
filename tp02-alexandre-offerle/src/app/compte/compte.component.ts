import { Component } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {
  name: string = '';
  firstName: string = '';
  address: string = '';
  postalCode: string = '';
  city: string = '';
  phone: string = '';
  email: string = '';
  civility: string = '';
  password: string = '';
  login: string = '';
  country: string = '';

  resume: string = '';

  onSubmit(): void {
    this.resume = `
      ${this.civility} ${this.name} ${this.firstName}
      ${this.address}
      ${this.postalCode} ${this.city}
      ${this.country}
      ${this.phone}
      ${this.email}
      ${this.login} ${this.password}
    `;
  }
}
