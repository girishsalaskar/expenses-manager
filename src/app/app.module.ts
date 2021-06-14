import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { TestingChildComponent } from './testing-child/testing-child.component';
import { SampleProfileFormComponent } from './sample-profile-form/sample-profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestingChildComponent,
    SampleProfileFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
