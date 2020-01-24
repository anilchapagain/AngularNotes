import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular Notes';
  public isAuthenticated: boolean;


  constructor(public oktaAuth: OktaAuthService) {}

async ngOnInit() {
  this.isAuthenticated = await this.oktaAuth.isAuthenticated();
}

login() {
  this.oktaAuth.loginRedirect();
}

logout() {
  this.oktaAuth.logout('/');
}
}
