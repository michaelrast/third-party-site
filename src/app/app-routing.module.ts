import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { JustZipcodeComponent } from './components/just-zipcode/just-zipcode.component';
import { FullInfoComponent } from './components/full-info/full-info.component';

const routes: Routes = [
  { path: 'main', component: MainComponent, children: [
    { path: 'contact-info', component: ContactInfoComponent },
    { path: 'just-zipcode', component: JustZipcodeComponent },
    { path: 'full-info', component: FullInfoComponent },
    { path: '', redirectTo: 'contact-info', pathMatch: 'full'  }
  ] },
  { path: '',
    redirectTo: '/main/contact-info',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
