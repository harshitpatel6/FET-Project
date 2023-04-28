import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-certificate',
  templateUrl: './marriage-certificate.component.html',
  styleUrls: ['./marriage-certificate.component.css']
})
export class MarriageCertificateComponent implements OnInit {
  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
  }
}
