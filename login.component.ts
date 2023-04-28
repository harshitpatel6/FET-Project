import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'password') {
      // login successful, navigate to home page
      this.router.navigate(['home']);
    } else {
      // login failed, display error message
      this.error = 'Invalid username or password';
    }
  }
}