import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { RedirectToPostService } from './../../services/redirectToPost.service';

@Component({
  selector: 'app-just-zipcode',
  templateUrl: './just-zipcode.component.html',
  styleUrls: ['./just-zipcode.component.scss']
})
export class JustZipcodeComponent implements OnInit {
  zipcode: string = '';
  email: string = '';

  constructor(private redirectToPostService: RedirectToPostService) { }

  ngOnInit() {
  }

  submit(): void {
    let inModel = {
      "zipCode": this.zipcode,
      "emailAddress": this.email
    }

    this.redirectToPostService.redirectToPost(inModel);
  }
}
