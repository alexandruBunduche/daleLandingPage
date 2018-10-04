import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LandingPageComponent} from './views/landing-page/landing-page.component';
import {CalendarComponent} from './views/landing-page/landing-form/calendar/calendar.component';
import {CalendarModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/inputtext';

import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {LandingFormComponent} from './views/landing-page/landing-form/landing-form.component';
import {FormBuilder} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CalendarComponent,
    LandingFormComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {
}
