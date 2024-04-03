import { Component } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  sentEmails: Email[] = [];

  expandEmail(email: Email) {
    email.expanded = !email.expanded;
  }

  markAsSpecial(email: Email) {
    email.isSpecial = !email.isSpecial;
  }

  addSentEmail(email: Email) {
    this.sentEmails.push(email);
  }
}