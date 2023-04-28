import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn = false;

  constructor() {}

  ngOnInit() {
    // check if user is logged in
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }
}
