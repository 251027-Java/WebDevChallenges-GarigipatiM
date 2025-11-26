import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  userIsAuthenticated:boolean = false

  authenticateUser() {
    this.userIsAuthenticated = true;
  }

  isAuthenticated() {
    return this.userIsAuthenticated;
  }
}
