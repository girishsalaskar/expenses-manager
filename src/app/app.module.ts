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
import { ThreeComponent } from './three/three.component';

const routs: Routes = [
  { path:'one',component:OneComponent},
  { path:'two',component:TwoComponent},
  {path:'three',component:ThreeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestingChildComponent,
    SampleProfileFormComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
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
