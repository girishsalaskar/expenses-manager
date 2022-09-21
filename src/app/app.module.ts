import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { TestingChildComponent } from './testing-child/testing-child.component';
import { SampleProfileFormComponent } from './sample-profile-form/sample-profile-form.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routs: Routes = [
  { path:'one',component:OneComponent},
  { path:'two',component:TwoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestingChildComponent,
    SampleProfileFormComponent,
    OneComponent,
    TwoComponent
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
