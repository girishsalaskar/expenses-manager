import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-sample-profile-form',
  templateUrl: './sample-profile-form.component.html',
  styleUrls: ['./sample-profile-form.component.css']
})
export class SampleProfileFormComponent implements OnInit {
  userProfile: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userProfile = this.formBuilder.group({
      first_name: ['', {updateOn:'blur', validators:[Validators.required, Validators.minLength(3)], asyncValidators:[]}],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      phone_number: ['', [Validators.pattern('[0-9]{8,}'), Validators.required]],
      email_address: ['', [Validators.pattern('[a-zA-Z0-9\.\_\@]{7,}'), Validators.required]],
      education: this.formBuilder.array([]),
      address: this.formBuilder.group({
        landmark: ['', [Validators.required, Validators.minLength(3)]],
        country: [''],
        state: ['']
      })
    });
  }

  addEducation() {
    let edu = new FormControl('', [Validators.required, Validators.minLength(3)]);
    let educations = this.userProfile.get("education") as FormArray;
    educations.push(edu);
  }

  removeEducation(index: number) {
    let education = this.userProfile.get("education") as FormArray;
    education.removeAt(index);
  }

  getEducations(): FormArray {
    let education = this.userProfile.get("education") as FormArray;
    return education;
  }

  ngOnInit() {
    //valueChange subscribe
    this.userProfile.controls["first_name"].valueChanges.subscribe((value) => { this.trackChange(value) });
    console.log(this.userProfile.controls["address"]);
    this.addEducation();
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
