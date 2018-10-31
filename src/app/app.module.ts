import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

import { NgbModalConfig, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CalendarModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/inputtext';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import {AppComponent} from './app.component';
import {LandingPageComponent} from './views/landing-page/landing-page.component';
import {CalendarComponent} from './views/landing-page/landing-form/calendar/calendar.component';
import { LandingFormComponent } from './views/landing-page/landing-form/landing-form.component';
import { FilePickerComponent } from './views/landing-page/landing-form/file-picker/file-picker.component';
import { MainService } from './services/main.service';
import { SkillsPickerComponent } from './views/landing-page/landing-form/skills-picker/skills-picker.component';
import { MultiSelectModule } from 'primeng/multiselect';





@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CalendarComponent,
    LandingFormComponent,
    FilePickerComponent,
    SkillsPickerComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgZorroAntdModule,
    MultiSelectModule
  ],
  providers: [HttpClient, FormBuilder, MainService, NgbModalConfig, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule {
}
