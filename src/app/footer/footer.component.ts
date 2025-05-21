import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = '';
  
  onSubscribe() {
    // Implement newsletter subscription logic
    console.log('Subscribing email:', this.email);
    this.email = '';
  }
}
