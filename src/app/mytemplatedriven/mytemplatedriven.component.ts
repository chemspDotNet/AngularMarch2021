import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mytemplatedriven',
  templateUrl: './mytemplatedriven.component.html',
  styleUrls: ['./mytemplatedriven.component.css']
})
export class MytemplatedrivenComponent implements OnInit {

  user = {
    firstname: "Paul",
    lastname: "Smith"
  }
  constructor() { }

  ngOnInit() {
  }
  submitForm(form) {
    debugger;
    // console.log(this.user);
  }


  sumbitMyForm(form: NgForm) {
    debugger;


  }

  CancelSubmit(form: NgForm) {
    this.user['firstname'] = '';
    this.user.lastname = '';
    form.reset();
    debugger;
  }

}
