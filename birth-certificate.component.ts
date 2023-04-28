import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birth-certificate',
  templateUrl: './birth-certificate.component.html',
  styleUrls: ['./birth-certificate.component.css']
})
export class BirthCertificateComponent implements OnInit {
  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
  }
  
}


