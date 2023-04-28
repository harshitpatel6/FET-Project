import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string | undefined;
  email!: string;
  message!: string;
  submitted: boolean = false;

  submitForm() {
    // TODO: send form data to server or API
    console.log('Form submitted!');
    this.submitted = true;
  }
}
