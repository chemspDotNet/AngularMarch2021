import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-myreactive',
  templateUrl: './myreactive.component.html',
  styleUrls: ['./myreactive.component.css']
})
export class MyreactiveComponent implements OnInit {
  mySignUpForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.mySignUpForm = new FormGroup({
      'fname': new FormControl('mary', Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'address': new FormGroup({
        'street': new FormControl(null, [Validators.required, this.customLength.bind(this)]),
        'city': new FormControl(null, [Validators.required, Validators.minLength(5)])
      }),
      'technologies': new FormArray([])
    });

    this.mySignUpForm.get('technologies');
  }
  handleSubmit() {
    debugger;
    console.log(this.mySignUpForm);
  }

  addTechnologies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.mySignUpForm.get('technologies')).push(control);
  }


  getTechnologies() {

    return (<FormArray>this.mySignUpForm.get('technologies'));
  }


  // Custom Validator
  customLength(control: FormControl) {

    var x: String = control.value;
    if (x == null)
      x = '';


    if (x.length < 5) {
      return { 'notvaliditem': true }
    }
    else
      return null;
  }

}
