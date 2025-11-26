import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';

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
  constructor(private router:Router, private auth:Auth) {}

  // Hardcoded login
  login() {
    if(this.username === 'user' && this.password === 'password') {
      
      this.auth.authenticateUser();
      this.router.navigateByUrl("/dashboard")

    } else {
      alert("Username or password are incorrect!")
    }
  }

}
