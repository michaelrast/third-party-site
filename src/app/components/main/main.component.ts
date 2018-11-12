import { Component } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'third-party-site';

  eCommerceLocation = environment.eCommerce_location;
}
