import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message =
    [
      { "name": "New Class1" },
      { "name": "New Class2" },
      { "name": "New Class3" },
      { "name": "New Class4" }
    ];
  flag = false;
  inputVal = '';
  inputVal2 = 'fsdfsdfsdfs';

  constructor() { }

  ngOnInit() {
  }

  getMessage() {

  }

  toggle() {
    this.flag = !this.flag;
  }

  setValue(val) {

    this.inputVal = val;
  }

}
