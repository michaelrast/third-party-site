import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { JustZipcodeComponent } from './components/just-zipcode/just-zipcode.component';
import { FullInfoComponent } from './components/full-info/full-info.component';
import { SitePickerComponent } from './components/site-picker/site-picker.component';

import { Configurations } from '../app/app.configurations';

import { RedirectToPostService } from '../app/services/redirectToPost.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactInfoComponent,
    JustZipcodeComponent,
    FullInfoComponent,
    SitePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Configurations,
    RedirectToPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
