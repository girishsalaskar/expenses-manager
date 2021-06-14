import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { TestingChildComponent } from './testing-child/testing-child.component';
import { SampleProfileFormComponent } from './sample-profile-form/sample-profile-form.component';

const routs: Routes = [
  { path:'home',component:AppComponent},
  { path:'expense-entry',component:ExpenseEntryComponent},
  { path:'testing-child',component:TestingChildComponent},
  { path:'sample-profile',component:SampleProfileFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestingChildComponent,
    SampleProfileFormComponent
  ],
  imports: [
    RouterModule.forRoot(routs),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
