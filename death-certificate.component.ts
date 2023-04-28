import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-death-certificate',
  templateUrl: './death-certificate.component.html',
  styleUrls: ['./death-certificate.component.css']
})
export class DeathCertificateComponent implements OnInit {
  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit()  {
    this.submitted = true;
  }
}
