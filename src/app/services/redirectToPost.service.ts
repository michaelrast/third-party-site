import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Configurations } from '../app.configurations';

declare var cecredirect: any;

@Injectable()
export class RedirectToPostService {
    constructor(private http: HttpClient, private configruations: Configurations) { }

    redirectToPost(inModel: any){
        cecredirect(this.configruations.eCommSite, inModel);
    }
}