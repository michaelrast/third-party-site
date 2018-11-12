import { Component, OnInit } from '@angular/core';

import { Configurations } from '../../app.configurations';

@Component({
  selector: 'site-picker',
  templateUrl: './site-picker.component.html',
  styleUrls: ['./site-picker.component.scss']
})
export class SitePickerComponent implements OnInit {
  eCommSite: string;

  constructor(private configurations: Configurations) { }

  ngOnInit() {
    if(this.configurations.eCommSite === ''){
      this.eCommSite = 'http://localhost:65071/';
      this.configurations.eCommSite = this.eCommSite;
    }
    else{
      this.eCommSite = this.configurations.eCommSite;
    }
  }

  public onValChange(val: string) {
    this.eCommSite = val;
    this.configurations.eCommSite = val;
  }

}
