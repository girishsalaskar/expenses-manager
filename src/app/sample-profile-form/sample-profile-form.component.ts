import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-sample-profile-form',
  templateUrl: './sample-profile-form.component.html',
  styleUrls: ['./sample-profile-form.component.css']
})
export class SampleProfileFormComponent implements OnInit {

  /*userProfile: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone_number: new FormControl('', [Validators.pattern('[0-9]{8,}'), Validators.required]),
    email_address: new FormControl('', [Validators.pattern('[a-zA-Z0-9\.\_\@]{7,}'), Validators.required]),
    education: new FormControl(''),
    address: new FormGroup({
      landmark: new FormControl('', [Validators.required, Validators.minLength(3)]),
      country: new FormControl(''),
      state: new FormControl('')
    })
  });*/
  userProfile: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.userProfile=this.formBuilder.group({
      first_name:['', [Validators.required, Validators.minLength(3)]],
      last_name:['', [Validators.required, Validators.minLength(3)]],
      phone_number:['', [Validators.pattern('[0-9]{8,}'), Validators.required]],
      email_address:['', [Validators.pattern('[a-zA-Z0-9\.\_\@]{7,}'), Validators.required]],
      education:[''],
      address:this.formBuilder.group({
        landmark: ['',[Validators.required, Validators.minLength(3)]],
        country: [''],
        state: ['']
      })
    });
  }

  ngOnInit() {
    //valueChange subscribe
    this.userProfile.controls["first_name"].valueChanges.subscribe((value) => { this.trackChange(value) });
    console.log(this.userProfile.controls["address"]);
  }

  //Value change subscribe listener
  trackChange(value: any) {
    console.log(value);
    console.log("New Value : " + this.userProfile.controls["first_name"].value);
  }

  submitProfile() {
    console.log(this.userProfile);
    console.log(this.userProfile.valid);
    console.log(this.userProfile.status);
    Object.keys(this.userProfile.controls).forEach(elem => {
      console.log(elem);
      console.log(this.userProfile.get(elem).errors);
    });
    if (this.userProfile.status === "VALID") {
      alert("Congrats! Validation passed!");
    } else {
      alert("Pss! Please enter all details properly!");
    }
  }
}
