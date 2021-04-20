import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ourValidation = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(null, [
      Validators.min(18),
      Validators.max(60),
      Validators.required,
    ]),
  });

  get Name() {
    return this.ourValidation.controls.name.valid;
  }
  get Age() {
    return this.ourValidation.controls.age.valid;
  }

  sub() {
    // console.log(this.ourValidation);
    // console.log("Name: "+this.ourValidation.controls.name.status)
    // console.log(this.ourValidation.controls.name.valid)
    // console.log("Age: "+this.ourValidation.controls.age.status)
    // console.log(this.ourValidation.controls.age.valid)

    if (this.ourValidation.valid) {
    }
    if (this.Age && this.Name) {
      console.log('recieved');
    }
  }

  Add(n, a) {}
}
