import { Component, OnInit } from '@angular/core';

import { RedirectToPostService } from './../../services/redirectToPost.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  zipcode: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';

  constructor(private redirectToPostService: RedirectToPostService) { }

  ngOnInit() {
    this.email = this.makeid() + '@cecdemo1.com';
    this.phone = '102-123-1029';
    this.firstName = 'TF' + this.makeid();
    this.lastName = 'TL' + this.makeid();
  }

  submit(): void {
    let inModel = {
      "zipCode": this.zipcode,
      "emailAddress": this.email,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "phoneNumber": this.phone,
    }

    this.redirectToPostService.redirectToPost(inModel);
  }

  makeid(): string {
    
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
