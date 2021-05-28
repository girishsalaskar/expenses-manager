import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-sample-profile-form',
  templateUrl: './sample-profile-form.component.html',
  styleUrls: ['./sample-profile-form.component.css']
})
export class SampleProfileFormComponent implements OnInit {

  first_name: FormControl;
  constructor() { }

  ngOnInit() {
    this.first_name = new FormControl('');
    this.first_name.setValue("Default value");
    this.first_name.valueChanges.subscribe(($evt)=>{
      console.log($evt);
      console.log("New Value " + this.first_name.value);
    });
    
  }

}
