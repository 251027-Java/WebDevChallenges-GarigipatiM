import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // username and password
  username:string = ""
  password:string = ""

  // Dependency Inject Router
  constructor(private router:Router) {}

  // Hardcoded login
  login() {
    if(this.username === 'user' && this.password === 'password') {
      // Switch urls using Router
      this.router.navigateByUrl("/dashboard")
    } else {
      alert("Username or password are incorrect!")
    }
  }

}
